var elBurger = document.querySelector('.burger_hero');
var elBurgerBox = document.querySelector('.burger_nav_box');
elBurger.addEventListener('click', function(){
    elBurgerBox.classList.toggle('shownav');
})