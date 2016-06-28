// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// lightbox
$(document).ready(function() {
    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            beforeLoad: function () {
                var el, id = $(this.element).data('title-id');

                if (id) {
                    el = $('#' + id);

                    if (el.length) {
                        this.title = el.html();
                    }
                }
            },
            helpers: {
                overlay: {
                    locked: false
                }
            },
            padding: 0
        })
});