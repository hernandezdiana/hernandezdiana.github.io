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
    // Navigation links move to the right of the navigation bar (add a class)
  // else
  } else {
    // Navigation bar is no longer sticky and becomes transparent (remove a class)
    $('nav').removeClass('navbar');
    // Fade out my name on the left side of the navigation bar
    $('.myname').fadeOut('fast');
  }
});
