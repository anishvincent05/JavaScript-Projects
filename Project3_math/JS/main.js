// Sum
function sum() {
    var sum1=2 + 2 ;
    var sum2 = "2+2=";
    sum2 += sum1;
    document.getElementById('Math').innerHTML=sum2;
}
//Substration
function sub() {
    var sum1=5 - 2 ;

    
    document.getElementById('Math-sub').innerHTML="5-2= " + sum1;
}
//Multiplication
function mult() {
    var sum1=8*2 ;

    
    document.getElementById('Math-mult').innerHTML="8x2 = " + sum1;
}
//Division
function div() {
    var sum1=8/2 ;

    
    document.getElementById('Math-div').innerHTML="8 / 2 = " + sum1;
}
//Modulus

function mod() {
    var sum1=8%2 ;

    
    document.getElementById('Math-mod').innerHTML="Modulus 8 / 2 = " + sum1;
}
//Increment
function inct() {
    var sum1=8 ;
    sum1++;

    
    document.getElementById('Math-inct').innerHTML= sum1;
}
//Decrement
function decre() {
    var sum1=8 ;
    sum1--;

    
    document.getElementById('Math-decre').innerHTML= sum1;
}