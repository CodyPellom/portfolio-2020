 if(window.scrollY==0){
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
    $('.hero-section').addClass("navbar-background-changer");
    $('.overview-section').addClass("navbar-background-changer");
    $('.hero-section').css("transition", "all 0.5s");
    $('.overview-section').css("transition", "all 0.5s");
  } else {
    $('.hero-section').removeClass("navbar-background-changer");
    $('.overview-section').removeClass("navbar-background-changer");
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
  }) .add({
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

 
/*Animation Section Start*/
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
  };
$(window).on('resize scroll', function() {
$('.animation-section').each(function(){
  if($('.animation-section').isInViewport()){
    anime({
      targets: '.animation-section .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  
  
  
  
  
  
  

 }
})
});
    /*  anime({
      targets: '#triangleOne',
      translateX: 250, // -> '250px'
      rotate: 540,
      duration: 2000
    });
    anime({
      targets: '#triangleTwo',
      translateX: 220, // -> '250px'
      rotate: 500,
      duration: 2000,
      delay: 500
    })
*/