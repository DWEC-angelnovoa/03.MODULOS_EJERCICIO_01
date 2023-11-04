import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="boton" type="button">Incrementar</button>
      <p id="letrero"><p>
      <button id="botonReset" type="button">Reset</button>
    </div>
  </div>
`
let counter = 1
function incrementar(letrero, boton,botonReset) {
  const setCounter = (count) => {
    counter = count
    letrero.innerHTML = `${counter}`
  }
  boton.addEventListener('click', () => setCounter(counter + 1))
  setCounter(1)
  botonReset.addEventListener('click',() => setCounter(1))
}

incrementar(document.querySelector('#letrero'),document.querySelector('#boton'),document.querySelector('#botonReset'))

