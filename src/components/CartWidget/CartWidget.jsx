import './CartWidget.css'

const CartWidget = () => {
    const elCarrito = "./carrito-de-compras.png";  
    return (
    <div>
        <img className='elCarrito' src={elCarrito} alt="Carrito" />
        <p className='carritoP'>Carrito</p>
        <p className='carritoP'>Cant: 10</p>
    </div>
  )
}

export default CartWidget