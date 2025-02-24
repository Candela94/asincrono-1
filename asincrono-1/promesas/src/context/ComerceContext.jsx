
import { useContext, createContext, useState, useEffect } from "react";


//1.creamos el contexto

export const ComerceContext = createContext()


//2.definir el contexto principal 

export const ComerceContextProvider = ({children}) => {


    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)


 
    const obtenerData = async() => {

        try {
            const response = await fetch('https://fakestoreapi.com/products')

            const data = await response.json();

            setProducts(data)
            setLoading(false)

        } catch (error) {
            console.error('Error al cargar los productos ', error)
            setLoading(false)
        }

    }


    useEffect(() => {
        obtenerData();
    }, [])



    return(

       <ComerceContext.Provider value={{products, loading}}>
        {children}
       </ComerceContext.Provider>

    )



}