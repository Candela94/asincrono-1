
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


import './cardUser.css'


const CardUser = ({user}) => {
   

    if (!user) {
        return <p>Cargando datos...</p>;
    }



    return (
        <div className="Card">

            <img className="Card-img" src={user.picture.large} alt={`${user.name} `}  />

            <div className="Informacion">
                <h3 className="Informacion-name">{user.name.first} {user.name.last}</h3>
                <p style= {{fontStyle:'oblique', fontSize:'14px'}}className="Informacion-userName">{user.login.username}</p>
                <p className="Informacion-edad">{user.registered.age} years</p>

                <div className="Informacion-ubicacion">
                    <p className="Informacion-ciudad">{user.location.city}, {user.location.state}</p>
                </div>

            </div>

        </div>
    );
};

export default CardUser;