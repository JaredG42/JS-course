let fuel = 1000;
let distance = 0;
// continue and break controll the loop
while(fuel > 0){
    distance++;

    if(distance >= 100 && distance < 200) {
        continue;
    }

    fuel--;

    if(distance == 500) {
        break;
    }
}
console.log(distance, fuel);