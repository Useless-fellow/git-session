// This is the example of while loop
// countdown
var countdown = 10;
var i =0;
while(i < countdown)
{
 console.log(countdown);
 countdown--;
}
//-------------------------//
//this is the example for do while loop
let count =0;
   do{
    console.log(count);
    count ++;
   }while(count<5)
//-------------------------------------------------------//
//Javascript Math functions
//Math.floor
console.log(Math.floor(5.9)); //5
console.log(Math.floor(-4.9));//-5
//Math.ceil
console.log(Math.ceil(5.1));//6
console.log(Math.ceil(-4.9));//-4
//Math.round
console.log(Math.round(5.4));//5
console.log(Math.round(6.5));//7
console.log(Math.round(-5.5));//-5
console.log(Math.round(-5.8));//-6
//Math.sqrt
console.log(Math.sqrt(0));//0
console.log(Math.sqrt(-2));//Nan
console.log(Math.sqrt(25));//5
//Math.cbrt
console.log(Math.cbrt(27));
console.log(Math.cbrt(125));
console.log(Math.cbrt(-125));//-5
//Math.abs
console.log(Math.abs(-4.5));
console.log(Math.abs(-4.8));
console.log(Math.abs(-4.4));
//Math.trunc
console.log(Math.trunc(4.5));//4
console.log(Math.trunc(4.8));//4
console.log(Math.trunc(-4.4));//-4
//Math.min
console.log(Math.min(3,25,49,-3,-18));
//Math.max
console.log(Math.max(3,25,49,3.28,-3,-18));
//Math.pow
var a = 2;
console.log(Math.pow(a,5));//2*2*2*2*2
//Math.random
console.log((Math.random()*10));