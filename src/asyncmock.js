const productos = [
    { nombre: "Remera", precio: 7000, id: "1", img: "../img/remera.jpg", idCat: "2" },
    { nombre: "Funko", precio: 12000, id: "2", img: "../img/funko.jpg", idCat: "3" },
    { nombre: "Matera", precio: 10000, id: "3", img: "../img/matera.jpg", idCat: "3" },
    { nombre: "Gorra", precio: 6000, id: "4", img: "../img/gorra.jpg", idCat: "2" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 2000)
    })
}