class Form{
    constructor() {
        this.title = createElement('h2');
        this.startButton = createButton('Start Game');
        this.input = createInput('name');
        this.greeting = createElement('h2');
        this.reset = createButton('reset');
      }
      hideStart(){
       
        this.title.hide();
        this.greeting.hide();
      }
    
      display(){
        
        this.title.html("Multiplayer Game");
        this.title.position(displayWidth/2 - 70, displayHeight/2 - 200); 

        this.input.position(displayWidth/2 - 60, displayHeight/2 - 110)

        this.startButton.position(displayWidth/2-30,displayHeight/2 - 80);

        this.reset.position(50, 20);

        this.startButton.mousePressed(()=>{
            this.input.hide();
            this.startButton.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2 - 70, displayHeight/2 - 50);
          });
        
          this.reset.mousePressed(()=>{
            database.ref('/').update({
              playerCount: 0,
              gameState: 0
            });
          });
      }
}