
function countdown(){
    var seconds = document.getElementById("seconds").value;
    var seconds1 = seconds;
    // Setting timer
    function tick() {
        seconds = seconds-1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick,1000);
        // Slide switching
        if (seconds == 0) 
         {  seconds = seconds1;
            var x = document.getElementsByTagName("img");
            for(let i = 0; i<x.length ;i++){
                if(x[i].classList.contains("active") && i<2){
                    x[i].classList.remove("active");
                    x[i+1].classList.add("active") ;
                    break;
                }
                else if (x[i].classList.contains("active") && i==x.length-1){
                    x[i].classList.remove("active");
                    x[0].classList.add("active") ;
                    break;
                }
            
            }
        }
    }
    tick();
}