
let mainMenu = document.querySelector('.mainMenu')
let closeNav = document.querySelector('.closeNav')
let openNav = document.querySelector('.openNav')

openNav.addEventListener('click', open)
closeNav.addEventListener('click', close)

let open () {
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0'

}

let close () {
    mainMenu.style.top = '-100%'
}

/*
function toggleClass() {
    let menu = document.querySelector('.mainMenu');
    menu.classList.toggle('toggleCls');
}

let hamburger = document.querySelector('.hamIcon');

hamburger.addEventListener('click' toggleClass)  */