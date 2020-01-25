$(function () {



var menuIcon = $('#menu-icon');


$("#menu-icon-section").click(function (event) {
    anime({
        targets: '#menu-icon',
        opacity: 0,
        duration: 2000
    });
    anime({
        targets: '#navbar',
        translateX: 0,
        duration: 1000,
        rotate: 8

    });
    $('#navbar').css("display", "block");
    //        $('#navbar').css("transform", "translateX(0px)");
    //transform: translateX(225px);
    $('#hero-section').css("transition", "opacity 2s")
    $('#hero-section').css("opacity", "0.10")
    $('#hero-section').css("background-color", "black")
    event.stopPropagation();
});
   
$(document).click(function () {
        anime({
            targets: '#navbar',
            translateX: 202,
            rotate: 0
        });  
        $('#hero-section').css("opacity", "1")
        anime({
            targets: '#menu-icon',
            opacity: 1,
            duration: 2000
        });

})

    $("#navbar").click(function (event) {
        alert('clicked inside');
        event.stopPropagation();
    });

})


