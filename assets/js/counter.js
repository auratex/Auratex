/* ============================================
   COUNTER - AuraTex
   Animation des compteurs statistiques
   ============================================ */

$(document).ready(function() {
    // Counter animation
    $('.counter').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-target');
        
        var observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                $({ countNum: 0 }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
                observer.disconnect();
            }
        });
        
        observer.observe($this[0]);
    });
});
