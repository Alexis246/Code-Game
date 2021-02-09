class Player{

    constructor(){
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.name = null;
        this.rotation = 0;
    }

    getCount(){

        var playerCountRef = database.ref("playerCount").on("value", function(data){
            playerCount = data.val()
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY,
            rotation: this.rotation
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
        
      }

}