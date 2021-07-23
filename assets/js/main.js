jQuery(document).ready(function ($) {

  // shrink nav onscroll - mobile first ux
  $(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
      $('.navbar-default').addClass('shrink');
      $('.cookie-banner').addClass('shrink');
    } else {
      $('.navbar-default').removeClass('shrink');
      $('.cookie-banner').removeClass('shrink');
    };
    if ($(document).scrollTop() > 320) {
      $('.brand-home').addClass('slide-out-top');
    } else {
      $('.brand-home').removeClass('slide-out-top');
    }
  });

  //toggle sidenav arrows up or down
  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  var year = (new Date()).getFullYear();
  $("#copyright").append("&copy; " + year + " Microsoft");

});
