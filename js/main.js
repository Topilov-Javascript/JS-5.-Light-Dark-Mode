const toggleSwitch = $('.theme-switch input[type="checkbox"]')
const nav = $('#nav')
const toggleIcon = $('#toggle-icon')
const image1 = $('#image1')
const image2 = $('#image2')
const image3 = $('#image3')
const textBox = $('#text-box')

// Dark or Light Image
function imageMode (color) {
  image1.src = `./images/undraw_proud_coder_${color}.svg`
  image2.src = `./images/undraw_feeling_proud_${color}.svg`
  image3.src = `./images/undraw_conceptual_idea_${color}.svg`
}

// Dark Mode Styles
function darkMode () {
  nav.css('background-color', 'rgba(0 0 0 / 50%)')
  textBox.css('background-color', 'rgba(255 255 255 / 50%)')
  toggleIcon.children()[0].innerText = 'Dark Mode'
  toggleIcon.children()[1].classList.replace('fa-sun', 'fa-moon')
  imageMode('dark')
}

// Light Mode Styles
function lightMode () {
  nav.css('background-color', 'rgba(255 255 255 / 50%)')
  textBox.css('background-color', 'rgba(0 0 0 / 50%)')
  toggleIcon.children()[0].innerText = 'Light Mode'
  toggleIcon.children()[1].classList.replace('fa-moon', 'fa-sun')
  imageMode('light')
}

// Switch Theme Dynamically
function switchTheme (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    darkMode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
    lightMode()
  }
}

// Event Listeners
toggleSwitch.change(switchTheme)

// Check Local Storage For Theme
const currenTheme = localStorage.getItem('theme')
if (currenTheme) {
  document.documentElement.setAttribute('data-theme', currenTheme)
  if (currenTheme==="dark") {
      toggleSwitch[0].checked = true;
      darkMode()
  }
}
