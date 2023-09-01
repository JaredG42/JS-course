let scores = [10, 20, 10];
console.log('Scores Array BEFORE:', scores);

// using a while loop increase scores by 1
let i = 0;
while(i < scores.length) {
  scores[i]++;
  i++;
}
console.log('Scores Array AFTER:', scores);

for(i = 0; i < scores.length; i++){
    scores[i]++;
}
console.log('Scores Array AFTER:', scores)

scores.forEach(function(enrty, index){
    scores[index]++;
});
console.log(scores);

let catalog = [
    {
        title: 'JS for beginners',
        author: 'Zenva',
        copies: 1,   
    },
    {
        title: 'HTML for beginners',
        author: 'Zenva',
        copies: 1,   
    },
    {
        title: 'CSS for beginners',
        author: 'XYZ',
        copies: 1,   
    }  
];

catalog.forEach(function(enrty){
    if(enrty.author == "Zenva"){
        enrty.copies++;
    }
});
console.log(catalog);