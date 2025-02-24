
import { createBrowserRouter } from 'react-router'



import Home from '../../pages/Home'
import Game from '../../pages/Game'
import Tienda from '../../pages/Tienda'
import Users from '../../pages/Usuarios'



//Items para nuestro Layout

import Layout from '../../Layout'
import Error from '../../pages/Error'



//Generamos lista de rutas 


const router = createBrowserRouter([{


    path: '/',
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home />
        },


        {
            path: '/monsters',
            element: <Game />
        },

        {
            path: '/store',
            element: <Tienda />
        },


        {
            path: '/users',
            element: <Users />
        },
    ]

}])


export default router