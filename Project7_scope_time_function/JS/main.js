
//function for returing time
function get_date(){
    if(new Date().getHours()<18){
    document.getElementById('greeting').innerHTML="How are you today"; //greeting 
    }
    else {
        document.getElementById('greeting').innerHTML="How was your day"; //greeting 
    }
}