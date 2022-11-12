var colour = ["red","green","blue","yellow"];


var gamepattern = [];
var userclickPattern = [];

$(".btn").click(function (){
  var userchosen = $(this).atr("id");

  userclickPattern.push(userchosen);
  playsound(userchosen);
  animatePress(userchosen);
});


function playsound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}
 function animatePress(current){
   $("#" + currentColor).addClass("pressed");

   //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
   setTimeout(function () {
     $("#" + currentColor).removeClass("pressed");
   }, 100);
 }



function nextSquence(){

  var random = Math.floor(Math.random()*4);
  var randomcolor = colour[random];
  gamepattern.push[randomcolor];
  $("#" +randomcolor).fadeOut(100).fadeIn(100);

  playsound(randomcolor);

}
nextSquence();
