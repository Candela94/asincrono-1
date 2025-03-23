


import { useContext, createContext, useState, useEffect } from "react";

//1. crear contexto

export const UserContext = createContext()


//2. definir contexto principal 

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
   




    const userData = async () => {

        let controller = new AbortController()
        let options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          signal: controller.signal
        }


        try{
            const response = await fetch('https://randomuser.me/api/?results=30',options);

            const jsonData = await response.json();

            setUser(jsonData.results)

            setLoading(false)


        } catch (error) { 
            console.error('Error al cargar los datos' , error)
            setLoading(false)
        }


       
    }


    useEffect(() => {
        userData()
    },[])



    return(
        <UserContext.Provider value={{user, loading}}>
            {children}
            
        </UserContext.Provider>
    )


}