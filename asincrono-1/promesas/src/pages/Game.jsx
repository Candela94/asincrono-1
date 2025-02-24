


import { useContext } from "react"
import { GameContext } from "../context/GameContext"

import { CardMonster } from "../components/card-monster/CardMonster"




const Monsters = () => {


    const {monster,monsterDetail, loading, monsterDetails } = useContext(GameContext)

        if(loading) {
            return <p>Cargando monstruos...</p>
        }

    return(
        <>
        <h1>Monsters</h1>

        <div className="Galeria">

            {
               monster.map((monsters,id) => (
                <CardMonster key={id} monster ={monsters} monsterDetail={monsterDetails} />
               ))
            }
        </div>


        </>
    )
}



export default Monsters