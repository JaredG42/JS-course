let item = "window";

if(item != "engine") {
    console.log("Not an engine!");
}

let score = 10;

if(score >= 60) {
    console.log("pass");
}
else if (score < 10) {
    console.log("Please meet teacher!")
}
else {
    console.log("fasle");
}

let isEngine = item == "engine";
console.log(isEngine);

//challenge
let balance = 1100;
let itemPrice = 10;

if(balance >= itemPrice) {
    // update balance
    // balance = balance - itemPrice;
    balance -= itemPrice;
    console.log('item purchased');
    console.log(balance);
}
else {
    console.log('not enough balance');
}