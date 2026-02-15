const navItem = document.querySelectorAll('.nav-item')
const navLink = document.querySelectorAll('.nav-link')
const dropdownMenu = document.querySelectorAll('.dropdown-menu')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-menu')
const burgerMenu  = document.querySelector('.burger-menu')
const headerNav = document.querySelector('.header-nav')


navLink.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()

    const parent = item.closest('.nav-item')

    navItem.forEach(el => {
      if (el != parent) {
        el.classList.remove('active')
      }
    })
    parent.classList.toggle('active')
  })
})

document.addEventListener('click', (e) => {
    const item = e.target

    if (!item.closest('.nav-item')) {
      navItem.forEach(el => {
        el.classList.remove('active')
      })
    }
})

function openMenu() {
  headerNav.classList.add('open')
  overlay.classList.add('open')
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  headerNav.classList.remove('open')
  overlay.classList.remove('open')
  document.body.style.overflow = ''
}

burgerMenu.addEventListener('click', openMenu)

closeBtn.addEventListener('click', closeMenu)

overlay.addEventListener('click', closeMenu)

window.addEventListener('resize', () => {
  if (window.innerWidth > 820) {
    closeMenu()
  }
})