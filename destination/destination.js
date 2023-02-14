let displayMoon = document.getElementById('buttonMoon')
let displayMars = document.getElementById('buttonMars')
let displayEuropa = document.getElementById('buttonEuropa')
let displayTitan = document.getElementById('buttonTitan')

let moon = document.getElementById('moon')
let mars = document.getElementById('mars')
let europa = document.getElementById('europa')
let titan = document.getElementById('titan')

// MOSTRAR MOON
displayMoon.addEventListener('click', () => {
  moon.style.display = 'flex'
  mars.style.display = 'none'
  europa.style.display = 'none'
  titan.style.display = 'none'
})

// MOSTRAR MARS
displayMars.addEventListener('click', () => {
  mars.style.display = 'flex'
  moon.style.display = 'none'
  europa.style.display = 'none'
  titan.style.display = 'none'
})

// MOSTRAR EUROPA
displayEuropa.addEventListener('click', () => {
  europa.style.display = 'flex'
  moon.style.display = 'none'
  mars.style.display = 'none'
  titan.style.display = 'none'
})

// MOSTRAR TITAN
displayTitan.addEventListener('click', () => {
  titan.style.display = 'flex'
  moon.style.display = 'none'
  mars.style.display = 'none'
  europa.style.display = 'none'
})
