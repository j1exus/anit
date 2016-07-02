$(function () {
    'use strict';
    $.fn.extend({
        animateCss: function (animationName, infinite) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName + (infinite == true ? ' infinite' : '')).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });


    $('[data-animatecss]').each(function () {
        var current = this;
        var data = current.dataset;
        var animation = data.animatecss;
        var infinite = 'animatecssInfinite' in data ? true : false;
        var waypointEnabled = 'animatecssWaypoint' in data ? true : false;
        var offset = data.animatecssOffset ? data.animatecssOffset : 0;
        var destroy = 'animatecssDestroy' in data ? true : false;
        var opacity = 'animatecssOpacity' in data ? data.animatecssOpacity.split(',') : [1, 1];
        var checkDirection, direction;

        if ('animatecssDirection' in data) {
            checkDirection = true;
            direction = data.animatecssDirection;
        } else {
            checkDirection = false;
        }

        if (!waypointEnabled) {
            $(current).animateCss(animation, infinite);
        } else {
            $(current).css('opacity', 0);
            var waypoint = new Waypoint({
                element: current,
                handler: function (direct) {

                    if (checkDirection) {
                        if (direct == direction) {
                            $(current).animateCss(animation, infinite);
                        }
                    } else {
                        $(current).animateCss(animation, infinite);
                    }

                    $(current).css('opacity', 1);
                    if (destroy) {
                        this.destroy();
                    }
                },
                offset: offset
            });
        }
    });
});