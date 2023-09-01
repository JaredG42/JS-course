function sendSignal(){
    console.log("Help");
}

let i = 0;
/* we havent run this a 1000 times */
while(i < 1000){
    sendSignal();
    //i = i + 1;
    //i += 1;
    i++;

}

let result = 0;

let j = 1;

while(j <= 10) {
    result = result + j;
    //loop needs to become false or could become inf loop and crash stuff xD
    j++;
}

console.log(result);

