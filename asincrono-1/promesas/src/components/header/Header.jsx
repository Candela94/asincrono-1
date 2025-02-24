
import { NavLink } from "react-router"
import './header.css'



export const Header = () => {

    return (
        <>
        
        <header className="Header">

            <nav className="Header-nav">
                
                <NavLink to='/'><h1 className="Header-logo">Logo</h1></NavLink>
                <ul className="Header-ul">
                    <li className="Header-li"><NavLink to='/users'>Users</NavLink></li>
                    <li className="Header-li"><NavLink to='/store'>Store</NavLink></li>
                    <li className="Header-li"><NavLink to='/monsters'>Monsters</NavLink></li>
                </ul>
                
            </nav>
        </header>
        
        </>
    )
}