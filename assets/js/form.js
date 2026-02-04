/* ============================================
   FORM - AuraTex
   Gestion du formulaire de contact Gmail
   ============================================ */

$(document).ready(function() {
    // Gmail Contact Button (from social media options)
    $('#gmailContactBtn').on('click', function(e) {
        e.preventDefault();
        openGmailWithDefaults();
    });

    // Contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        var email = $('#email').val().trim();
        var objet = $('#objet').val().trim();
        var message = $('#message').val().trim();
        
        // Basic validation
        if (!email || !objet || !message) {
            showNotification('Veuillez remplir tous les champs', 'error');
            return;
        }
        
        // Validate email format
        if (!isValidEmail(email)) {
            showNotification('Veuillez entrer une adresse email valide', 'error');
            return;
        }
        
        // Open Gmail with form data
        openGmailCompose(email, objet, message);
    });

    // Function to open Gmail with form data
    function openGmailCompose(fromEmail, subject, body) {
        // Create the email body with sender's email included
        var emailBody = 'De: ' + fromEmail + '\n\n' + body;
        
        // Create Gmail compose URL
        var gmailUrl = 'https://mail.google.com/mail/?view=cm' +
                      '&fs=1' +
                      '&to=auratex.services@gmail.com' +
                      '&su=' + encodeURIComponent(subject) +
                      '&body=' + encodeURIComponent(emailBody);
        
        // Open Gmail in new tab
        window.open(gmailUrl, '_blank');
        
        // Show success message
        showNotification('Gmail ouvert ! Envoyez votre message depuis Gmail.', 'success');
        
        // Reset form after 2 seconds
        setTimeout(function() {
            $('#contactForm')[0].reset();
        }, 2000);
    }

    // Function to open Gmail with default template
    function openGmailWithDefaults() {
        var defaultSubject = 'Demande d\'information - AuraTex';
        var defaultBody = 'Bonjour AuraTex,\n\n' +
                         'Je souhaiterais obtenir plus d\'informations sur vos services.\n\n' +
                         '[Décrivez votre projet ici]\n\n' +
                         'Cordialement';
        
        var gmailUrl = 'https://mail.google.com/mail/?view=cm' +
                      '&fs=1' +
                      '&to=auratex.services@gmail.com' +
                      '&su=' + encodeURIComponent(defaultSubject) +
                      '&body=' + encodeURIComponent(defaultBody);
        
        window.open(gmailUrl, '_blank');
    }

    // Email validation function
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification function
    function showNotification(message, type) {
        // Create notification element
        var notification = $('<div class="custom-notification"></div>')
            .addClass(type === 'success' ? 'notification-success' : 'notification-error')
            .html('<i class="fas fa-' + (type === 'success' ? 'check-circle' : 'exclamation-circle') + ' me-2"></i>' + message);
        
        // Add to body
        $('body').append(notification);
        
        // Show notification
        setTimeout(function() {
            notification.addClass('show');
        }, 100);
        
        // Hide and remove after 4 seconds
        setTimeout(function() {
            notification.removeClass('show');
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 4000);
    }
});