//Display type
function typ(){
    document.write(typeof 5);
}
//Display coercion
function coe(){
    document.write("90"+7);
}
//Display infinity
function wri(){
    document.write(-2E310);
    document.write(" to " + -2E310);
}
//Display Boollean
function bool(){
    document.write(10<2);
}
console.log(5>5);
console.log(5+5);

document.write(10=="10");// Equal operator
document.write(10==="10");// TriEqual operator
document.write(10==10 && 10<5);// AND operator
document.write(10==10 || 10<5);// OR operator