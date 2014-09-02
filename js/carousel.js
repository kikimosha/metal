$(document).ready(function () {
    var carousel = $('#waterwheel-carousel').waterwheelCarousel({
        horizon:210,
        horizonOffset: 0,
        horizonOffsetMultiplier:.7,
        separation: 225,
        edgeFadeEnabled: true,
        opacityMultiplier: 1
    });

    $('#slider_arrow_prev').click(function() {
        carousel.prev();
    });

    $('#slider_arrow_next').click(function() {
        carousel.next();
    });
});