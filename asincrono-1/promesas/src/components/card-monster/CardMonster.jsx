import { FaOptinMonster } from "react-icons/fa6";
import { useState } from "react";

import './cardmonster.css'

export const CardMonster = ({monster,monsterDetail}) => {

    const [showDetails, setShowDetails] = useState(false);
    const handleShowDetails = async (url) => {
        await monsterDetail(url);
        setShowDetails(true);
    };

    return (
        <>

        <div className="Card-monster">
            <div className="Monster">
        <FaOptinMonster style={{color:'white', fontSize:'72px'}} />

            </div>

            <div className="Monster-info">
                <h3>{monster.name}</h3>
                <button onClick={() => handleShowDetails(monster.url)}>Ver más detalles</button>
            </div>

            {showDetails && monsterDetail && (
                <div className="Detalles">
                   <p>Type: {monsterDetail.type}</p>
                   <p>Size: {monsterDetail.size}</p>
                   <ul>
                    <h5>Speed</h5>
                    <li>Walk: {monsterDetail.speed?.walk}</li>
                    <li>Fly: {monsterDetail.speed?.fly}</li>
                    <li>Swim: {monsterDetail.speed?.swim}</li>
                   </ul>
                   <h5>{monsterDetail.strenght}</h5>
                   <h5>{monsterDetail.constitution}</h5>
                   <h5>{monsterDetail.intelligence}</h5>
                   <h5>{monsterDetail.wisdom}</h5>



                </div>
            )}

        </div>
        </>
    )
}