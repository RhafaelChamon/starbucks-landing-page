const menu_button = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')
let lastPosition = window.scrollY

menu_button.addEventListener('click', () => {
    menu.classList.toggle('show')
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    let nowPosition = window.scrollY
    
    if (nowPosition < lastPosition) {
        header.style.boxShadow = 'none'
    } else {
        header.style.boxShadow = '0 4px 5px rgba(0, 0, 0, 0.2)'
    }

    lastPosition = nowPosition
})