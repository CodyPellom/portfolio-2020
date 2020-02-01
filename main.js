/*Navbar*/
$(document).ready(function () {

  $(".fancybox").fancybox({
    width: 600,
    height: 300,
    type: 'iframe'
  });
});


/*Navbar End*/
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

$(window).on('resize scroll', function () {
  $('.overview-section').each(function () {
    if ($('#profilePic').isInViewport()) {


      $('#profilePic').css("transition", "opacity 2s");
      $('#profilePic').css("opacity", "1");

    }
  })
})

/*Companies Fade In End*/

/*Skills Section Starts*/
particlesJS.load('particles-js', './particles.json', function () {
  console.log('callback - particles.js config loaded');
})
particlesJS.load('particles-jsTwo', './particle2.json', function () {
  console.log('callback - particles.js config loaded');
})
particlesJS.load('particles-jsThree', './particles3.json', function () {
  console.log('callback - particles.js config loaded');
})
particlesJS.load('particles-jsResearch', './particles3.json', function () {
  console.log('callback - particles.js config loaded');
})

/*Skills Sections Ends*/
/*Certificates Section Starts*/
var borderCounter = 0;
$(window).on('resize scroll', function () {
  $('.certificates-section').each(function () {
    if ($('.certificates-section').isInViewport()) {
      borderCounter++;
      if (borderCounter <= 1) {
        $('.certificates-section').css("transition", "border 5s");
        $('.certificates-section').css("border", "solid red 1px");
      }
    }
  })
});
/*Certificates Section Starts*/
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
/*Research Area*/
// Can also be included with a regular script tag
var typedCounter = 0;
$(window).on('resize scroll', function () {
  $('#research-typed-element').each(function () {
    if ($('#research-typed-element').isInViewport()) {
      typedCounter++;
      if (typedCounter <= 1) {
        var typed = new Typed('#typed', {
          strings: ['Click the examples to find out more!'],
          typeSpeed: 50,
          backSpeed: 15,
          backDelay: 1000,
          showCursor: false,

        });
      }
    }
  })
})


var headerCounter1 = 0;
$(window).on('resize scroll', function () {
  $('#skills-header').each(function () {
    if ($('#skills-header').isInViewport()) {
      headerCounter1++;
      if (headerCounter1 <= 1) {
        var typed = new Typed('#skills-header', {
          strings: ['Skills'],
          typeSpeed: 100,
          backSpeed: 15,
          backDelay: 1000,
          showCursor: false,

        });
      }
    }
  })
})

var headerCounter2 = 0;
$(window).on('resize scroll', function () {
  $('#language-header').each(function () {
    if ($('#language-header').isInViewport()) {
      headerCounter2++;
      if (headerCounter2 <= 1) {
        var typed = new Typed('#language-header', {
          strings: ['Languages +'],
          typeSpeed: 100,
          backSpeed: 15,
          backDelay: 1000,
          showCursor: false,

        });
      }
    }
  })
})

var headerCounter3 = 0;
$(window).on('resize scroll', function () {
  $('#framework-header').each(function () {
    if ($('#framework-header').isInViewport()) {
      headerCounter3++;
      if (headerCounter3 <= 1) {
        var typed = new Typed('#framework-header', {
          strings: ['Frameworks / <br/> Libraries'],
          typeSpeed: 100,
          backSpeed: 15,
          backDelay: 1000,
          showCursor: false,

        });
      }
    }
  })
})


var headerCounter4 = 0;
$(window).on('resize scroll', function () {
  $('#certificates-header').each(function () {
    if ($('#certificates-header').isInViewport()) {
      headerCounter4++;
      if (headerCounter4 <= 1) {
        var typed = new Typed('#certificates-header', {
          strings: ['Certificates'],
          typeSpeed: 100,
          backSpeed: 15,
          backDelay: 1000,
          showCursor: false,
        });
      }
    }
  })
})

var headerCounter5 = 0;
$(window).on('resize scroll', function () {
  $('#reseach-header').each(function () {
    if ($('#reseach-header').isInViewport()) {
      headerCounter5++;
      if (headerCounter5 <= 1) {
        var typed = new Typed('#reseach-header', {
          strings: ['Research'],
          typeSpeed: 100,
          backSpeed: 15,
          backDelay: 1000,
          showCursor: false,

        });
      }
    }
  })
})

var headerCounter6 = 0;
$(window).on('resize scroll', function () {
  $('#work-examples-header').each(function () {
    if ($('#work-examples-header').isInViewport()) {
      headerCounter6++;
      if (headerCounter6 <= 1) {
        var typed = new Typed('#work-examples-header', {
          strings: ['Work Examples'],
          typeSpeed: 100,
          backSpeed: 15,
          backDelay: 1000,
          showCursor: false,

        });
      }
    }
  })
})



/*Research Area Ends*/
/*Skills Section*/
var counterThree = 0;

var counterFour = 0;


var counterFive = 0;
/*Skills Section*/
$(document).ready(function () {
  /* Apply fancybox to multiple items */

  $("a.iframe").fancybox({
    'width': 640, // or whatever you want
    'height': 480, // or whatever you want
    'type': 'iframe'
  });

});