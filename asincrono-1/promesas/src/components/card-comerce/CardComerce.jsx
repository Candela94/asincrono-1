

import './cardComerce.css'
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

const CardCommerce = ({products}) => {

    if(!products) {
        return <p>Cargando productos...</p>
    }

    return(
        <div className='Card-tienda'>

            <img className='Card-imagen' src={products.image} alt={`${products.title}`} />

            <div className="Producto-informacion">

                <h4 className="Producto-titulo"> {products.title}</h4>
                <p className="Producto-precio">{products.price} €</p>
                <div className="Producto-valoraciones">
                <FaStar  style={{color:'orange'}}/>
                <p style={{color:'white'}}>{products.rating.rate}</p>
                </div>
                <div className="Producto-like">
                <IoMdHeartEmpty style={{fontSize:'20px'}} />
                </div>

            </div>

        </div>
    )
}

export default CardCommerce