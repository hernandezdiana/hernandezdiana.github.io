//When user scrolls
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);
  // IF the user has scrolled more than 104 (distanceScrolled is greater than 104)
  if (distanceScrolled > 117) {
    // Navigation bar is no longer transparent and becomes sticky (add a class)
    $('nav').addClass('navbar');
    // Fade in  my name appears on the left side of the navigation bar
    $('.myname').fadeIn(500);
  // else
  } else {
    $('nav').removeClass('navbar');
    // Fade out my name on the left side of the navigation bar
    $('.myname').fadeOut('fast');
  }
});



// When the user clicks the hamburger icon
$('.hamburger').on('click', function() {
  // If the menu is closed or opened, toggle class open
  $('.menu').toggleClass('open');
});



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Scroll to the top of the page
$("a[href='#top']").click(function() { $("html, body").animate({ scrollTop: 0 }, "slow"); return false; });

// Remove box-shadow after jumplinks have been clicked
$('.pagewrap .page').css({'-webkit-box-shadow' : 'none', '-moz-box-shadow' : 'none', 'box-shadow' : 'none'});
