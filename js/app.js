var elBurger = document.querySelector('.burger_hero');
var elBurgerBox = document.querySelector('.box_mobile_nav');

var icon= true;

elBurger.addEventListener('click', function() {
    elBurgerBox.classList.toggle('shownav');

    if(icon){
        elBurger.src = "../image/close.svg";
        icon=false;
    }
    
        else{
            elBurger.src = "../image/Combined Shape 2 (1).svg";
            icon=true;
        }
});



