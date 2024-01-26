
//function concatinate
function con(){
    var part1="Anish";
    var part2="Vincent";

    document.getElementById('concatinate').innerHTML=part1.concat(" ",part2);
}
//function for slice 
function sli(){
    var part1="Anish Vincent";
    

    document.getElementById('slicing').innerHTML=part1.slice(6,13);
}
//function to return number as string
function tostr(){
    var part1=25;
    

    document.getElementById('str').innerHTML=part1.toString();
}
//function to return number as precioson of 10
function pre(){
    var part1=1234567.1234567;
    

    document.getElementById('pre').innerHTML=part1.toPrecision(10);
}


