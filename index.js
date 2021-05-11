'use strict'



import { Title } from './components/Title.js'

import { Ul } from './components/Ul.js'

import { Button } from './components/Button.js'

import { Input } from './components/Input.js'

import { obtenerDatos } from './utils/obtenerDatos.js'

import createElement  from './utils/createElement.js'



const url = 'https://idwapi-juvasquez88.vercel.app/js'



const main = document.getElementById('main')

const titleEl = Title('Welcome Javascript')

const div1 = createElement('div',{class: 'container1'},[titleEl] )



const busqueda = Input('')

const boton = Button('Buscar');

const div2 = createElement('div',{class: 'container2'},[busqueda, boton] )



const lista = Ul('lista')

const div3 = createElement('div',{class: 'container3'},[lista] )



busqueda.addEventListener('keyup', function(e){

    if (e.code == 'Enter'){

        obtenerDatos(url, busqueda.value, lista)

    }

})

boton.addEventListener('click', function () {

    obtenerDatos(url, busqueda.value, lista)

})



main.appendChild(div1)

main.appendChild(div2)

main.appendChild(div3)



obtenerDatos(url, '', lista)
