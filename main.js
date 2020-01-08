var counter = 0;
var counterTwo = 0;

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

if (window.scrollY == 0) {
  $("#navbarSection").css("opacity", "10");
  $("#navbarSection").css("transition", "all 1s");
  $('.hero-section').addClass("navbar-background-changer");
  $('.overview-section').addClass("navbar-background-changer");
  $('.hero-section').css("transition", "all 0.5s");
  $('.overview-section').css("transition", "all 0.5s");
};
$(window).scroll(function () {
  if ($(window).scrollTop() < 5) {
    $("#navbarSection").css("opacity", "10");
    $("#navbarSection").css("transition", "all 1s");
    $('.hero-section').css("transition", "all 0.5s");
    $('.overview-section').css("transition", "all 0.5s");
  } else {
    $('.hero-section').css("transition", "all 1s");
    $('.overview-section').css("transition", "all 0.5s");
    $("#navbarSection").css("opacity", "0");
    $("#navbarSection").css("transition", "all 0.5s");
  }
});
var heroLogo = document.getElementById("heroLogo");
var heroText = document.getElementById("heroText");

/*Hero Logo Animation Start*/

var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: false
  })
  .add({
    targets: '.ml1 .letter',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 70 * (i + 1)
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 2200,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 2200,
    offset: '-=600'
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1200,
    offset: '-=600'
  })
/*Hero Logo Animation End*/


/*Companies Fade In Start*/
$(window).on('resize scroll', function () {
  $('.experience-section-companies').each(function () {
    if ($('.experience-section-companies').isInViewport()) {
      counterTwo++;
      if (counterTwo <= 1) {

        $('#appliedLogo').css("opacity", "1");
        $('#hdLogo').css("opacity", "1");
        $('#hpLogo').css("opacity", "1");
        $('#trustfuelLogo').css("opacity", "1");
      };
    }
  })
})
/*Companies Fade In End*/

/*Skills Section Starts*/
particlesJS.load('particles-js', './particles.json', function(){
  console.log('callback - particles.js config loaded');
})
particlesJS.load('particles-jsTwo', './particle2.json', function(){
  console.log('callback - particles.js config loaded');
})
particlesJS.load('particles-jsThree', './particles3.json', function(){
  console.log('callback - particles.js config loaded');
})

/*Skills Sections Ends*/
/*Animation Section Start*/
$(window).on('resize scroll', function () {
  $('.animation-trigger').each(function () {
    if ($('.animation-trigger').isInViewport()) {
      counter++;
      if (counter <= 1) {
        $('.animation-section').css("opacity", "1");
        anime({
          targets: '.animation-section .lines path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 25000,
          delay: function (el, i) {
            return i * 250
          },
          direction: 'alternate',
          loop: false
        });
        $('#svgFill').css("transition", "fill 15s");
        $('#svgFill').css("fill", "red");
      };
    }
  })
});
/*Animation Section End*/

/*Skills Section*/
var counterThree = 0;

var counterFour = 0;


var counterFive = 0;
/*Skills Section*/
$('#skillsLanguages').mouseover(function(){
  $('#particles-js').css("transition", "opacity 5s");
  $('#particles-js').css("opacity", "1");
});
$('#skillsLanguages').mouseleave(function(){
  $('#particles-js').css("opacity", "0");
});
$('#skillsFrameworks').mouseover(function(){
  $('#particles-jsTwo').css("transition", "opacity 5s");
  $('#particles-jsTwo').css("opacity", "1");
})
$('#skillsFrameworks').mouseleave(function(){
  $('#particles-jsTwo').css("opacity", "0");
})
$('#skillsExp').mouseover(function(){
  $('#particles-jsThree').css("transition", "opacity 5s");
  $('#particles-jsThree').css("opacity", "1");
})
$('#skillsExp').mouseleave(function(){
  $('#particles-jsThree').css("opacity", "0");
})