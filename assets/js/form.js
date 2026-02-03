/* ============================================
   FORM - AuraTex
   Gestion du formulaire de contact
   ============================================ */

$(document).ready(function() {
    // Contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        var nom = $('#nom').val();
        var email = $('#email').val();
        var sujet = $('#sujet').val();
        var message = $('#message').val();
        
        var mailtoLink = 'mailto:auratex.services@gmail.com' +
            '?subject=' + encodeURIComponent(sujet) +
            '&body=' + encodeURIComponent(
                'Nom: ' + nom + '\n' +
                'Email: ' + email + '\n\n' +
                'Message:\n' + message
            );
        
        window.location.href = mailtoLink;
        
        // Success animation
        var btn = $(this).find('button[type="submit"]');
        btn.html('<i class="fas fa-check me-2"></i> Message Envoyé !');
        btn.css('background', 'linear-gradient(135deg, #25D366, #128C7E)');
        
        setTimeout(function() {
            btn.html('<i class="fas fa-paper-plane me-2"></i> Envoyer le Message');
            btn.css('background', '');
            $('#contactForm')[0].reset();
        }, 3000);
    });
});
