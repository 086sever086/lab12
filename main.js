const buttonMenu = document.querySelector('.mobile-navigation__header-button');
const mobileNavigation = document.querySelector('.mobile-navigation');

buttonMenu.addEventListener('click', buttonMenuCliked)

function buttonMenuCliked(){
    mobileNavigation.classList.toggle('opened')
}