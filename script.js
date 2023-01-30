const diasText = document.querySelector('#dias')
const horasText = document.querySelector('#horas')
const minutosText = document.querySelector('#minutos')
const segundosText = document.querySelector('#segundos')

const newYearsDate = new Date('1 Jan 2024')

setInterval(() => {
  const currentDate = new Date()
  const totalSeconds = (newYearsDate - currentDate) / 1000

  const dias = Math.floor((totalSeconds / 3600) / 24)
  const horas = Math.floor((totalSeconds / 3600) % 24)
  const minutos = Math.floor((totalSeconds / 60) % 60)
  const segundos = Math.floor(totalSeconds % 60)

  diasText.innerText = addPadStart(dias)
  horasText.innerText = addPadStart(horas)
  minutosText.innerText = addPadStart(minutos)
  segundosText.innerText = addPadStart(segundos)
  
  
}, 1000)

function addPadStart(value) {
  return value < 10 ? `0${value}` : value
}