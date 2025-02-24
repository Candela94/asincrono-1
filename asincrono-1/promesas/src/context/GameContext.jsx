

import { useContext, createContext, useState, useEffect } from "react";

//1. crear contexto

export const GameContext = createContext()


//2. definir contexto principal 

export const GameContextProvider = ({ children }) => {

  const [monster, setMonster] = useState([])
  const [monsterDetail, setMonsterDetail] = useState([])
  const [loading, setLoading] = useState(true)




  const obtenerData = () => {
    let controller = new AbortController()
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      signal: controller.signal



    }

    fetch('https://www.dnd5eapi.co/api/2014/monsters', options)
      .then(res => res.json())
      .then(data => {
        setMonster(data.results)
        setLoading(false)

      })
      .catch(err => console.log(err))
      .finally(() => controller.abort())




  }


  const monsterDetails = (url) => {

    let controller = new AbortController()
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      signal: controller.signal

    }



    fetch(`https://www.dnd5eapi.co${url}`, options)
      .then(res => res.json())
      .then(data => setMonsterDetail(data))
      .catch(err => console.log(err))
      .finally(() => controller.abort())



  }

  // useEffect(() => {
  //   monsterDetails()
  // })



  useEffect(() => {
    obtenerData()
  }, [])


  return (
    <GameContext.Provider value={{ monster, monsterDetail, monsterDetails, loading }}>
      {children}

    </GameContext.Provider>
  )


}