$(document).ready(function () {
 
//---------------------------------------------------nameclick function
$(".name").click(function () {
  //---------------bring back homepage
  $(document).delay(300).queue(function (next) {
      window.location.href = "index.html";
      next();
  });

return false;
});

/* $(".name").hover(function () {
 $(".name").html("@joshualeifer")
}); */


//------------------------------menu slideup
//$('#whatever').delay(5300).fadeIn(500);
$('#whatever').delay(1200).fadeIn(500);
//------------------------------section header name click
$(".navname").click(function () {
  $('html, body').animate({
      scrollTop: $("#header").offset().top
  }, 400);
//  $('#bottom').fadeOut(200);
  });

//-------------------make each section the same height as the window
const sectionHeight = function(){
  windowHeight = window.innerHeight;
  $("#writing, #translation").css("min-height", windowHeight);
};

sectionHeight();
$(window).on("resize", function(){
  sectionHeight();
});
//---------------------------------------------------get to sections

$(".writing").click(function () {
  //----------------------------option one
$('html, body').animate({
    scrollTop: $("#writing").offset().top
}, 400);

});
$(".translation").click(function () {
  $('html, body').animate({
    scrollTop: $("#translation").offset().top
}, 600);
});
$(".twitter").click(function() {
  window.open('https://twitter.com/joshualeifer', '_blank');
});


$(".about").click(function () {
  windowHeight = window.innerHeight;
$("#about").fadeToggle(70);
//$(".about").toggleClass('visited');
});
$(".toprow span:first-of-type").click(function () {
  $("#about").fadeToggle(70);
 // $(".about").toggleClass('visited');
});
/* $("#about").on("mouseover", function(){
  $(".toprow").css("background-color","yellow");
});
$("#about").on("mouseout", function(){
  $(".toprow").css("background-color"," hsl(0, 0%, 95%)");
}); */

//---------------------------format listings on mobile more like citations

const mobileListing = function(){
let w = window.innerWidth;


//--------------style year and publication info for each listing

let citation = $('.citation');
let year = $('.year');
let publication = $('.publication');
if (w < 501){
    $('.year').css("display", "none");
    $('.publication').css("display", "none");
    //$(".citation").html("(" + pubContent + ", " + yearContent + ")");
    $(".listing").each(function(){
      //--------------get year and publication info for each listing
    let yearContent = $(this).find(year).html();
    let pubContent = $(this).find(publication).html();
      $(this).find(citation).html("(" + pubContent + ", " + yearContent + ")");
    });
    
} else if (w >= 501) {
  $('.year').css("display", "inherit");
  $('.publication').css("display", "inherit");
  $(".citation").html("");
}
}

//-------------------------------------------make about section draggable
$( "#about" ).draggable({
  scroll: false
});

$(window).on("resize", function(){
  mobileListing();
  let w = window.innerWidth;
  if (w<700){
    $( "#about" ).draggable("destroy");
  } else if (w > 700) {
    $( "#about" ).draggable({
      scroll: false
    });
  }
});

$(window).on("load", function(){
  mobileListing();
  let w = window.innerWidth;
   if (w > 700) {
    $( "#about" ).draggable({
      scroll: false
    });
  }
});

$(".title").on("mouseover", function(){
  $(this).parents('.listing').find("#key").css({
    "color": "blue",
    "text-shadow" : "0px 0px 6px blue",
    "filter" : "blur(1px)"
  }).html("●");
});
$(".title").on("mouseout", function(){
  $(this).parents('.listing').find("#key").html("○").css({
    "color": "black",
    "text-shadow" : "0px 0px 0px transparent",
    "filter" : "blur(0px)"
  });
});

 //--------------------temporary div that shows width—use to fix media queries as precisely as possible
 $(window).resize(function () {
  let width = window.innerWidth;
  $("#querytown").html("Width: " + width + " px");
});
    
  //------------------document closing bracket; don't touch--------------------//
  });