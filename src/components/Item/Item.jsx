import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='tarjetaProd'>
        <img className='imgProd' src={img} alt={nombre} />
        <h5>Producto: {nombre} </h5>
        <p className='precioId'>Precio: {precio} $ </p>
        <p className='precioId'>ID: {id} </p>       
        <Link to={`/item/${id}`} className='precioId'> Ver Detalles</Link>
    </div>
  )
}

export default Item