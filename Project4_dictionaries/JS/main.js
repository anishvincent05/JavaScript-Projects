//Dispalying dictionary
function dict(){
    var Animal={
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark"
    };
    document.getElementById('dictionary').innerHTML=Animal.Sound;
}
//Deleting dictionary
function del(){
    var Animal={
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark"
    };
    delete Animal.Sound
    document.getElementById('dictionary').innerHTML=Animal.Sound;
}
