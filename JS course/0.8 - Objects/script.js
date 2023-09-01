let player = {
    age: 99, 
    name: "Jeff",
    isActive: true,
    outfit: {
        color: "blue",
        size: "m",
        cost: 100,
        isNew: true,
    }
};

console.log(player);

console.log(player.name);
console.log(player["name"]);

player.isActive = false
console.log(player);

player.health = 100;
console.log(player);

delete player.health;
console.log(player);

console.log(player.outfit.color);