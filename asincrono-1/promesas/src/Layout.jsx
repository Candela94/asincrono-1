import { useState } from 'react'

import './css/Layout.css'
import { Outlet } from 'react-router'

import { Header } from './components/header/Header'


import CardUser from './components/card-user/CardUser'
import { UserContextProvider } from './context/UserContext'
import Users from './pages/Usuarios'
import { ComerceContextProvider } from './context/ComerceContext'
import Tienda from './pages/Tienda'


import { GameContextProvider } from './context/GameContext'
import Monsters from './pages/Game'



function Layout() {
  

  return (
    <>
     <Header />
     {/* <Outlet /> */}
     {/* <UserContextProvider>
     <Users />
     </UserContextProvider> */}

     {/* <ComerceContextProvider>
      <Tienda />
     </ComerceContextProvider> */}

<GameContextProvider>
  <Monsters />
</GameContextProvider>


     
    </>
  )
}

export default Layout
