/* ============================================
   NAVIGATION - AuraTex
   Gestion de la navbar et du scroll
   ============================================ */

$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }

        // Scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').addClass('show');
        } else {
            $('.scroll-top').removeClass('show');
        }
    });

    // Scroll to top
    $('.scroll-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000, 'swing');
        }
    });

    // Active nav link on scroll
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop() + 100;
        
        $('.nav-link').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            
            if (refElement.length && refElement.position().top <= scrollPos && 
                refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    });
});
