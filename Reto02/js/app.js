//TODO Variables de entorno
const numMoves = 0
let selectFicha = null
let arrayFichas = [
    "<div class='ficha1' id='1'></div>",
    "<div class='ficha2' id='2'></div>",
    "<div class='ficha3' id='3'></div>",
    "<div class='ficha4' id='4'></div>",
    "<div class='ficha5' id='5'></div>",
    "<div class='ficha6' id='6'></div>",
    "<div class='ficha7' id='7'></div>"
]

// TODO Actualizar Torres

let actualizarTorre1 = []
let actualizarTorre2 = []
let actualizarTorre3 = []

//TODO Variables HTML
const torre01 = document.getElementById('torre01')
const torre02 = document.getElementById('torre02')
const torre03 = document.getElementById('torre03')

const fichaEjem = document.getElementById('ficha01')

//? BTNs
const nuevo = document.getElementById('nuevo')
const terminar = document.getElementById('terminar')

//TODO ////////////////     Functions       ////////////////////

//* Iniciar Game
function startGame(){
    torre01.innerHTML = arrayFichas.join('')
    torre02.innerHTML = ''
    torre03.innerHTML = ''
}
//* terminar Gamee
function terminarGame(){
    torre01.innerHTML = ''
    torre02.innerHTML = ''
    torre03.innerHTML = ''
}


//* Select torre
torre01.addEventListener('click', () => {
    if(selectFicha === null){
        selectFicha = (torre01.firstElementChild).outerHTML
        torre01.firstElementChild.remove()
        console.log(actualizarTorre1)

    } else {
        torre01.innerHTML = selectFicha
        selectFicha = null
    }
})

torre02.addEventListener('click', () => {
    if(selectFicha === null){
        selectFicha = (torre02.firstElementChild).outerHTML
        torre02.firstElementChild.remove()

    } else {
        torre02.innerHTML = selectFicha
        selectFicha = null
    }
})

torre03.addEventListener('click', () => {
    if(selectFicha === null){
        selectFicha = (torre03.firstElementChild).outerHTML
        torre03.firstElementChild.remove()

    } else {
        torre03.innerHTML = selectFicha
        selectFicha = null
    }
})

//* 
function fichasCoinciden(coincidirFicha){
    for(let i = 0; i < arrayFichas.length; i++){
        if(coincidirFicha == arrayFichas[i]){
            return arrayFichas[i]
        }
    }
}

//TODO Events
startGame()

nuevo.addEventListener('click', startGame)
terminar.addEventListener('click', terminarGame)


let timer = document.getElementById('timer')
let segs = 0;
let min = 0;

//* Contador
setInterval(() => {
    if(segs == 60){
        min++
    } else {
        segs++
    }
    timer.textContent = `Time: ${min}:${segs}`
}, 1000);