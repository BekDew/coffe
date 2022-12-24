var elBurger = document.querySelector('.site_burger');
var elBurgerBox = document.querySelector('.burgers_box');

var icon= true;

elBurger.addEventListener('click', function() {
    elBurgerBox.classList.toggle("shownav");

    if(icon){
        elBurger.src = "../image/close.svg";
        icon=false;
    }
    
        else{
            elBurger.src = "../image/burger.svg";
            icon=true;
        }
});


