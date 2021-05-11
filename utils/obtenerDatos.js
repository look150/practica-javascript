'use strict'
import createElement from './createElement.js'

export function obtenerDatos(url, pal, lista){
    lista.innerHTML = ' '
    fetch(url).then(response => response.json())
                .then(receive => Object.values(receive['phrases']))
                .then(datos => {buscar(datos, pal, lista)})
}

function buscar(datos, pal, lista){
    let coincidencia = false
    
    for (let i in datos){
        let dato = String(Object.values(datos[i]))
        let li = createElement('li', {}, [dato])

        if(pal.length == 0 || dato.toLowerCase().indexOf(pal.toLowerCase()) >= 0){
            lista.appendChild(li)
            coincidencia = true;
        }
    }

    if(coincidencia == false){
        lista.appendChild(createElement('p', {}, ['Sin resultados']))
    }
}