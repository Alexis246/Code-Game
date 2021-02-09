class Game {
    constructor(){
      this.playerImage = loadImage("images/Player.png");
     // this.user1Y = 0;
     // this.user1X = 0;
     // this.user2X = 0;
     // this.user2Y = 0;
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(state){
         gameState = state.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();

        ps = [];
        p1 = new BaseP(100,100,50,50,PI/2);
        p1.scale = 0.15;
        ps.push(p1);
        p2 = new BaseP(150,100,50,50,PI/2);
        p2.scale = 0.15;
        ps.push(p2);
      }
      
    }
  
    play(){
      background(rgb(255,255,255));
      form.hideStart();
      Player.getPlayerInfo();
     // let angle1 = atan2(mouseY - this.user1Y, mouseX - this.user1X);
     // let angle2 = atan2(mouseY - this.user2Y, mouseX - this.user2X);
  
      if(allPlayers !== undefined){
        var index = 0;
        var x;
        var y;
        var angle1;
        for(var plr in allPlayers){



          index += 1;
          y = displayHeight - allPlayers[plr].positionY;
          x = displayWidth - allPlayers[plr].positionX;
          ps[index-1].x = x;
          ps[index-1].y = y;
          translate(ps[index-1].width/2,ps[index-1].height/2);
          angle1 = atan2(mouseY - ps[index-1].height/2, mouseX - ps[index-1].width/2);
          rotate(angle1);
          image(this.playerImage, 0, 0, ps[index-1].width/2, ps[index-1].height/2);
         /* BaseP.display();
          if (index === player.index){
            ps[index-1].shapeColor = "red";
            camera.position.x = ps[index-1].x;
            camera.position.y = ps[index-1].y;
            strokeWeight(3);
           stroke("black");
            fill("red");
            ellipse(x,y,60,60);
          }*/
        }
      }
  
      if(player.index !== null){

        if(keyDown(UP_ARROW) || keyDown("w")){
            player.positionY +=35
            player.update();
          }
          if(keyDown(LEFT_ARROW) || keyDown("a")){
            player.positionX +=35
            player.update();
          }
          if(keyDown(DOWN_ARROW) || keyDown("s")){
            player.positionY -=35
            player.update();
          }
          if(keyDown(RIGHT_ARROW) || keyDown("d")){
            player.positionX -=35
            player.update();
          }

      }
      drawSprites();
    }
  
  }