

import { useContext } from "react"
import { ComerceContext } from "../context/ComerceContext"

import CardCommerce from "../components/card-comerce/CardComerce"


const Tienda = () => {

    const {products, loading } = useContext(ComerceContext)

    if(loading) {
        return <p>Cargando productos</p>
    }
    return(
        <>
        <h1>Productos</h1>

        <div className="Galeria">


{
    products.map((product,id) => (

        <CardCommerce key={id} products={product} />
    ))
}

        </div>


        </>
    )
}



export default Tienda