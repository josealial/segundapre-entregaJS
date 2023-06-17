let pasajes = [
    { id: 1, destinos: "Parque del Plata", categoria: "capital", asientosDisponibles: 34, precio: 280 },
    { id: 2, destinos: "Piriápolis", categoria: "costa", asientosDisponibles: 24, precio: 597 },
    { id: 3, destinos: "Colonia del Sacramento", categoria: "litoral", asientosDisponibles: 18, precio: 656 },
    { id: 4, destinos: "Minas", categoria: "interior", asientosDisponibles: 3, precio: 436 },
    { id: 5, destinos: "Cabo Polonio", categoria: "costa", asientosDisponibles: 29, precio: 808 },
    { id: 6, destinos: "Punta del Diablo", categoria: "costa", asientosDisponibles: 5, precio: 845 },
    { id: 7, destinos: "Paso De Los Toros", categoria: "interior", asientosDisponibles: 15, precio: 707 },
    { id: 8, destinos: "Salto", categoria: "litoral", asientosDisponibles: 7, precio: 1340 },
    { id: 9, destinos: "Paysandu", categoria: "litoral", asientosDisponibles: 23, precio: 1036 },
    { id: 10, destinos: "Rivera", categoria: "interior", asientosDisponibles: 15, precio: 1363 },
    { id: 11, destinos: "Treinta y tres", categoria: "interior", asientosDisponibles: 33, precio: 791 },
    { id: 12, destinos: "Tacuarembo", categoria: "interior", asientosDisponibles: 27, precio: 1104 },
    { id: 13, destinos: "Artigas", categoria: "interior", asientosDisponibles: 11, precio: 1450 }
]

let carrito = []

let mensaje = "Bienvenidos a Dos Cruces, porque sino seria otra cosa..\n1 - Destinos\n2 - Agregar Pasaje al carrito\n3 - Ver Pasajes disponibles\n4 - Categorias de Destinos\n5 - Precios de menor a mayor\n6 - Ver carrito\n7 - Ver Total y finalizar compra\n0 - SALIR"

let opcion

do {
    opcion = Number(prompt(mensaje))
    if (opcion === 1) {
        alert(listar(pasajes))
    } else if (opcion === 2) {
        let id = Number(prompt("Seleccione id del producto a comprar\n" + listar(pasajes)))
        let pasajeBuscado = pasajes.find(viaje => viaje.id === id)
        let posicionPasajesEnCarrito = carrito.findIndex(prod => prod.id === pasajeBuscado.id)

        if (posicionPasajesEnCarrito === -1) {
            carrito.push({
                id: pasajeBuscado.id,
                destinos: pasajeBuscado.destinos,
                precioUnitario: pasajeBuscado.precio,
                unidades: 1,
                subtotal: pasajeBuscado.precio
            })
        } else {
            carrito[posicionPasajesEnCarrito].unidades++
            carrito[posicionPasajesEnCarrito].subtotal = carrito[posicionPasajesEnCarrito].precioUnitario * carrito[posicionPasajesEnCarrito].unidades
        }
        console.log(carrito)
    } else if (opcion === 3) {
        let listaDestinos = "Destinos disponibles:\n"
        for (const pasaje of pasajes) {
            listaDestinos += "Destino: " + pasaje.destinos + " - Asientos disponibles: " + pasaje.asientosDisponibles + "\n"
        }
        alert(listaDestinos)

    } else if (opcion === 4) {
        let categoria = prompt("Ingrese la categoría: litoral, costa o interior").toLowerCase()
        let destinosCategoria = pasajes.filter(pasaje => pasaje.categoria.toLowerCase() === categoria)
        if (destinosCategoria.length > 0) {
            alert(listar(destinosCategoria))
        } else {
            alert("No se encontraron destinos en esa categoría.")
        }

    } else if (opcion === 5) {
        pasajes.sort((a, b) => a.precio - b.precio)
        let listaDestinos = "Destinos ordenados por precio de menor a mayor:\n"
        for (const pasaje of pasajes) {
            listaDestinos += "Destino: " + pasaje.destinos + " - Precio: $" + pasaje.precio + "\n"
        }
        alert(listaDestinos)
    } if (opcion === 6) {
        if (carrito.length > 0) {
            alert(listar(carrito))
        } else {
            alert("primero debe agregar productos al carrito")
        }
    } else if (opcion === 7) {
        let total = 0
        carrito.forEach(pasaje => {
            total += pasaje.subtotal
        })
        alert("Total de la compra: $" + total)
        break
    }
} while (opcion !== 0)


function listar(arrayAListar) {
    let listado = "ID - Destino\n"
    arrayAListar.forEach(element => {
        listado = listado + element.id + "-" + element.destinos + "\n"
    })
    return listado
}