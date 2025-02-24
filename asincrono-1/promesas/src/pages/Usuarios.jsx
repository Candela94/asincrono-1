
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import CardUser from "../components/card-user/CardUser"




const Users = () => {

    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <p>Cargando datos...</p>;
    }
    return(
        <>

        <h1>Lista de usuarios</h1>

        <div className="Galeria">

        {
            user.map((us,id) => (
                <CardUser key={id} user={us} />
            ))
        }
        </div>
        </>
    )
}



export default Users