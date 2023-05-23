import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Producto: {nombre} </h2>
        <h3>Precio: {precio} $</h3>
        <h3>ID: {id} </h3>
        <p> Dame ya tu tarjeta de crédito, qué tanto ver detalle</p>
        <img src= {img} alt={nombre} />
    </div>
  )
}

export default ItemDetail