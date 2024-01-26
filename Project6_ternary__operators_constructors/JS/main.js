function Ride_Function(){
    var Height , Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById('Ride').innerHTML=Can_ride;

}


//Nested Function
function count(){
    document.getElementById('Nested_Function').innerHTML = count_one();
    function count_one(){
        var num = 9;
        function incre(){num++;}
        incre();
        return num;
    }
}
//Constructor
function car(make,model){
    this.car_make=make;
    this.car_model=model;
}

var car1=new car("Audi",2018);
document.write(car1.car_model);