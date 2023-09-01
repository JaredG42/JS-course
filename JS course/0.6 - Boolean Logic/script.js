let distance = 250;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100;
let isEngineFunctioning = true;
// FIRST Evaluation  (!) = true or false check ^ || = or 
if(!isEngineFunctioning || distance > 200 ) {
  console.log('wont make it');
}
// SECOND Evaluation (check if FIRST is false)  (&&) = and
else if(distanceCondition && fuel >= 100) {
  console.log('you will make it');
}
// THIRD Evaluation (check if FIRST and SECOND false) 
else if(distance < 100 && fuel >= 25) {
    console.log('you will make it');
}



let sum = 4%2 
console.log(sum);