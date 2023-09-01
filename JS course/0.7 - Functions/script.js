// 1 hour = 60 minutes 
function hourToMinutes(hours) {
    let result = hours * 60;
    console.log(result);
    return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(20);

let daysToHours = function(days) {
    return days * 24;
}

let c = daysToHours(5);
console.log(c);

//variable declaration
let balance = 100;
let stock = 50;
let price = 5;

// replaced let quantity = 8;
function sellItem(quantity) {
    //1. check if we have stock
    if(quantity <= stock) {
        //2. reduce stock, increas balance
        //stock = stock - quantity;
        stock -= quantity;

        //balance = balance + price * quantity
        balance += price * quantity;

        console.log("purchess completed", balance, stock);

    }
    else {
        console.log("not enought stock");
    }
}
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(20);