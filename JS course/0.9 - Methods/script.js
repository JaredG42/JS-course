let player = {
    health: 100,
    fun: 0,
    // this can be removed because its replaced with eat method
    eatApple: function() {
        console.log("eat apple");

        //this.health = this.health + 10;
        this.health += 10;

        console.log(this.health);
    },
    eatCandy: function() {
        this.health -= 5;
        this.fun += 5;
    },
    play: function() {
        this.fun += 10;
    },
    eat: function(food){
        if(food == "apple"){
            this.health += 10;
        }
        else if (food == "candy"){
            this.health -= 5;
            this.fun += 5;
        }
    },
};
//activates the function
player.eatApple();
player.play();
player.eatCandy();

console.log(player);

player.eat("apple");

console.log(player);
