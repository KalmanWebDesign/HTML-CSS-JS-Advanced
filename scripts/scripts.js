const navOpen = document.querySelector('.fa-bars')
const navClose = document.querySelector('.fa-x')
const nav = document.querySelector('.mobile-overlay')

navOpen.addEventListener('click', () => {
    nav.style.right = '0';
})

navClose.addEventListener('click', () => {
    nav.style.right = '-20rem';
})