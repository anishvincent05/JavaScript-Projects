// Counting numbers using loop
function loop(){
    var x=1;
    var m= " " ;
    while (x<11){
        m +=  "<br>" + x;
        x++;

    }
    document.getElementById("loop").innerHTML=m;

}
// Array
function array(){
    var x=[];
    x[0]="cat";
    x[1]="dog";
    x[2]="cow";
    x[3]="monkey";
    var m= " " ;
    y=0;
    while (y<x.length){
        m +=  "<br>" + x[y];
        y++;

    }
    document.getElementById("array").innerHTML=m;

}
//defining object
let car = {
    color:"Black",
    made:"Audi",
    year:"2018",
    description : function() {
        return "This " + this.color + " car is made by " + this.made;
    } 
    
};
document.getElementById("car-object").innerHTML=car.description();