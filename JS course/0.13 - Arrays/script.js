let database = ["turtle","cat","dot","bird"];
console.log(database);
console.log(database.length);

let animal = database[1]
console.log(animal);

database[0] = "dino";
console.log(database);

let last = database[database.length - 1];
console.log(last);

database.push('lizzard');
console.log(database);

database.pop('lizard');
console.log(database);