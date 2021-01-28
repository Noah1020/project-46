class Game{
    constructor(){

    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
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
      }

      snowman1 = createSprite(30,30);
      snowman1.addImage(snowmanImage);
      snowman2 = createSprite(displayWidth - 30, 30);
      snowman2.addImage(snowmanImage);
      snowman3 = createSprite(30, displayHeight - 30);
      snowman3.addImage(snowmanImage);
      snowman4 = createSprite(displayWidth - 30, displayHeight - 30);
      snowman4.addImage(snowmanImage);
      snowmans = [snowman1,snowman2, snowman3, snowman4];

    }

}