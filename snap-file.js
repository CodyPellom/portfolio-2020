
var linkedIn = Snap("#linkedInLogo");
var github = Snap("#githubLogo");
var gmail = Snap("#gmailLogo");
var mobile = Snap("#mobileLogo");

$('#linkedInLogo').css("transition", "fill 1s");
$('#githubLogo').css("transition", "fill 1s");
$('#gmailLogo').css("transition", "fill 1s");
$('#mobileLogo').css("transition", "fill 1s");

linkedIn.node.onmouseover = function(){
    linkedIn.attr({
        fill: "#0e76a8"
    });
};
linkedIn.node.onmouseleave = function(){
    linkedIn.attr({
        fill: "black"
    });
};

github.node.onmouseover = function(){
    github.attr({
        fill: "#ffb366"
    });
};
github.node.onmouseleave = function(){
    github.attr({
        fill: "black"
    });
};

gmail.node.onmouseover = function(){
    gmail.attr({
        fill: "#D44638"
    });
};
gmail.node.onmouseleave = function(){
    gmail.attr({
        fill: "black"
    });
};

mobile.node.onmouseover = function(){
    mobile.attr({
        fill: "#46e29f"
    });
};
mobile.node.onmouseleave = function(){
    mobile.attr({
        fill: "black"
    });
};
