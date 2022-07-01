const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')



hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})



document.querySelectorAll('.nav-link').forEach(navLink => navLink.addEventListener("click", () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))



hamburger.addEventListener('click', () => {
  const profileImg = document.querySelector('#profileImg')
  profileImg.style.display === 'none' ? profileImg.style.display = 'block' : profileImg.style.display = 'none'
})



hamburger.addEventListener('click', () => {
  const about = document.querySelector('.about')
  about.style.display == 'none' ? about.style.display = 'block' : about.style.display = 'none'
})



hamburger.addEventListener('click', () => {
  const aboutTxtBlock = document.querySelector('#aboutTxtBlock')
  aboutTxtBlock.style.display == 'none' ? aboutTxtBlock.style.display = 'block' : aboutTxtBlock.style.display = 'none'
})



hamburger.addEventListener('click', () => {
  const theArtwearGallery = document.querySelector('#theArtwearGallery')
  theArtwearGallery.style.display == 'none' ? theArtwearGallery.style.display = 'block' : theArtwearGallery.style.display = 'none'
})