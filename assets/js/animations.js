/* ============================================
   ANIMATIONS - AuraTex
   Gestion du preloader, cursor personnalisé et AOS
   ============================================ */

$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Preloader
    setTimeout(function() {
        $('.preloader').fadeOut('slow');
    }, 1500);

    // Custom Cursor
    const cursor = $('.custom-cursor');
    const follower = $('.cursor-follower');

    $(document).mousemove(function(e) {
        cursor.css({
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        });
        follower.css({
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        });
    });

    $('a, button').hover(
        function() {
            cursor.css({
                transform: 'scale(2)',
                backgroundColor: 'rgba(0, 229, 255, 0.3)'
            });
        },
        function() {
            cursor.css({
                transform: 'scale(1)',
                backgroundColor: 'transparent'
            });
        }
    );
});
