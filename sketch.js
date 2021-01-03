var car1image,car2image,car3image,car4image;
var reset;
var car1,car2,car3,car4,cars;
var player,form,game;
var database;
var gameState = 0,playerCount ;
var allPlayers;
var track;

function preload()
{
  car1image = loadImage("car1.png");
  car2image = loadImage("car2.png");
  car3image = loadImage("car3.png");
  car4image = loadImage("car4.png");
  track = loadImage("track.jpg");
}

function setup(){
   
    createCanvas(displayWidth,displayHeight);
    database = firebase.database()
   reset = createButton ("reset");
   reset.position(100,100);
    game = new Game ()
   game.getState();
   game.start();
}
function draw(){
   
    if(playerCount === 4)
    {
        game.update(1);
    }
   if(gameState===1)
   {
       game.play();
   }
   if(gameState === 2)
   {
     game.end();
   }
   reset.mousePressed(function(){

   database.ref("/").update({
       playerCount:0,
       gameState:0,
       players:"",
   });

 });
 
 

}