let buttonVehicle = document.getElementById('buttonVehicle')
let buttonSpaceport = document.getElementById('buttonSpaceport')
let buttonCapsule = document.getElementById('buttonCapsule')

let vehicle = document.getElementById('vehicle')
let spaceport = document.getElementById('spaceport')
let capsule = document.getElementById('capsule')

buttonVehicle.addEventListener('click', () => {
  vehicle.style.display = 'block'
  spaceport.style.display = 'none'
  capsule.style.display = 'none'
})

buttonSpaceport.addEventListener('click', () => {
  spaceport.style.display = 'block'
  vehicle.style.display = 'none'
  capsule.style.display = 'none'
})

buttonCapsule.addEventListener('click', () => {
  capsule.style.display = 'block'
  vehicle.style.display = 'none'
  spaceport.style.display = 'none'
})
