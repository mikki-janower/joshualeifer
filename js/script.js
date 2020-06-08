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

//--------------------typing effect-------------------//

//CONTENT: <a href="https://jewishcurrents.org/" target="_blank">Jewish Currents</a>. His writing has appeared in <a href="https://www.dissentmagazine.org/" target="_blank">Dissent</a>, <a href="https://www.972mag.com/" target="_blank">972</a>, <a href="https://nplusonemag.com/" target="_blank">n+1</a>, <a href="https://www.theguardian.com/us" target="_blank">The Guardian</a>, and others.
//NOTE TO SELF: if you need more typing functionality check TypeIt docu; it has lots more options than you think! 

new TypeIt("#typed", {
  speed: 36,
  lifeLike:true,
  waitUntilVisible: true
})
.type('<a href="https://jewishcurrents.org/author/joshua-leifer/" target="_blank">Jewish Currents</a>. ', {delay: 100})
.pause(700)
.type(' His writing has appeared in <a href="https://www.dissentmagazine.org/" target="_blank">Dissent</a>, <a href="https://www.972mag.com/writer/joshl/" target="_blank">972</a>, <a href="https://nplusonemag.com/authors/leiferjoshua/" target="_blank">n+1</a>, <a href="https://www.theguardian.com/profile/joshua-leifer" target="_blank">The Guardian</a>, <a href="https://www.thenation.com/authors/joshua-leifer/" target="_blank">The Nation</a>, <a href="https://www.jacobinmag.com/author/joshua-leifer" target="_blank">Jacobin</a>,  <a href="https://www.haaretz.com/misc/writers/WRITER-1.6855413" target="_blank">Haaretz</a>, <a href="https://thebaffler.com/authors/joshua-leifer" target="_blank">The Baffler</a>, <a href="https://slate.com/author/joshua-leifer" target="_blank">Slate</a>, and others.')
.go();

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

//-------------------------------------------make about section draggable
$( "#about" ).draggable({
  scroll: false
});

$(window).on("resize", function(){
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