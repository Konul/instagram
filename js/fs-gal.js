/**
 * Author: Tim Vervoort - info@timvervoort.com
 * Licence: Free for commercial use
 * Last update: 23rd December 2018 - v1.3.1
 */

var fsGal_preloads = new Array();

$('document').ready(function() {

    $('.fs-gal-view').css('display', 'flex').hide();

    // Make gallery objects clickable, also dynamic added objects
    $('body').on('click', '.fs-gal', function(e) {
        fsGal_DisplayImage($(e.currentTarget));
    });
  
    preloadImage($('.fs-gal')[0].dataset.url); // Preload the very first image

    // Display gallery
    function fsGal_DisplayImage(obj) {

        // Set current image
        title = obj.attr('title');
        alt = obj.attr('alt');
        if (!title) { title = alt; }
        imgElem = $('.fs-gal-main');
        imgElem.attr('title', title);
        imgElem.attr('alt', alt);
        imgElem.attr('src', obj.attr('data-url'));
        $('.fs-gal-view > h1').text(title);
        if (!title || title == '') { $('.fs-gal-view > h1').fadeOut(); }
        else { $('.fs-gal-view > h1').fadeIn(); }

        // Create buttons
        var current = $('.fs-gal').index(obj);
        var prev = current - 1;
        var next = current + 1;
        if (prev >= 0) {
            $('.fs-gal-view > .fs-gal-prev').attr('data-img-index', prev);
        }
        if (next < $('.fs-gal').length) {
            $('.fs-gal-view > .fs-gal-next').attr('data-img-index', next);
        }
        $('.fs-gal-view').fadeIn(); // Display gallery

        // Wrap gallery
        if (current == $('.fs-gal').length - 1)  { // Last image
            $('.fs-gal-view > .fs-gal-next').attr('data-img-index', 0);
        }
        else if (current == 0)  { // Last image
            $('.fs-gal-view > .fs-gal-prev').attr('data-img-index', $('.fs-gal').length - 1);
        }
      
        preloadNextAndPrev(); // Preload next images

    }

    // Preload next and previous image
    function preloadNextAndPrev() {
        fsGal_preloads = new Array();
        // Previous
        index = $('.fs-gal-view > .fs-gal-prev').attr('data-img-index');
        elem = $($('.fs-gal').get(index));
        img = elem.attr('data-url');
        preloadImage(img);
        // Next
        index = $('.fs-gal-view > .fs-gal-next').attr('data-img-index');
        elem = $($('.fs-gal').get(index));
        img = elem.attr('data-url');
        preloadImage(img);
    }

    // Preload an image
    function preloadImage(source) {
      var preload = (new Image());
      preload.src = source
      fsGal_preloads.push(preload);
    }

    // Check if the image viewer is displayed
    function isViewerOpen() {
        return $('.fs-gal-view').css('display') !== 'none'; // Can be block, flex...
    }

    // Gallery navigation
    $('.fs-gal-view .fs-gal-nav').click(function(e) {
        e.stopPropagation();
        if (isViewerOpen()) {
            var index = $(this).attr('data-img-index');
            var img = $($('.fs-gal').get(index));
            fsGal_DisplayImage(img);
        }        
    });

    // Close gallery
    $('.fs-gal-view').click(function(e) {
        $('.fs-gal-view').fadeOut();
    });
    $('.fs-gal-main').click(function(e) {
        e.stopPropagation();
    });

    // Keyboard navigation
    $('body').keydown(function(e) {
        if (e.keyCode == 37) { 
            $('.fs-gal-view .fs-gal-prev').click(); // Left arrow
        }
        else if(e.keyCode == 39) {
            $('.fs-gal-view .fs-gal-next').click(); // Right arrow
        }
        else if(e.keyCode == 27) {
            $('.fs-gal-view .fs-gal-close').click(); // ESC
        }
    });

    // Scroll navigation
    $(window).bind('mousewheel', function(e) {
        if (e.originalEvent.wheelDelta >= 0) { // Scroll up, go to previous image
            $('.fs-gal-view .fs-gal-prev').click();
        }
        else { // Scroll down, go to next image
            $('.fs-gal-view .fs-gal-next').click();
        }
    });

    // Slide navigation using touch swiping
    var touchstartX = 0;
    var touchendX = 0;
    var gestureZone = $('.fs-gal-view')[0];

    // Listen to touch start
    gestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    // Listen to touch end
    gestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    }, false); 

    // Deterimine touch gesture direction
    function handleGesture() {
        if (touchendX <= touchstartX) { // Slide to left, go to next image
            $('.fs-gal-view .fs-gal-next').click();
        }
        if (touchendX >= touchstartX) { // Slide to right, go to previous image
            $('.fs-gal-view .fs-gal-prev').click();
        }
    }

});