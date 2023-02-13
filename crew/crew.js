let buttonCommander = document.getElementById('buttonCommander')
let buttonSpecialist = document.getElementById('buttonSpecialist')
let buttonPilot = document.getElementById('buttonPilot')
let buttonEnginner = document.getElementById('buttonEnginner')

let commander = document.getElementById('commander')
let specialist = document.getElementById('specialist')
let pilot = document.getElementById('pilot')
let enginner = document.getElementById('enginner')

let cm = buttonCommander.addEventListener('click', () => {
  commander.style.display = 'block'
  specialist.style.display = 'none'
  pilot.style.display = 'none'
  enginner.style.display = 'none'
})

let sp = buttonSpecialist.addEventListener('click', () => {
  specialist.style.display = 'block'
  commander.style.display = 'none'
  pilot.style.display = 'none'
  enginner.style.display = 'none'
})

buttonPilot.addEventListener('click', () => {
  pilot.style.display = 'block'
  commander.style.display = 'none'
  specialist.style.display = 'none'
  enginner.style.display = 'none'
})

buttonEnginner.addEventListener('click', () => {
  enginner.style.display = 'block'
  commander.style.display = 'none'
  specialist.style.display = 'none'
  pilot.style.display = 'none'
})
