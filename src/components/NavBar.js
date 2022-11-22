import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import Links from "./Links"

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/"><img src={"https://cdn-icons-png.flaticon.com/512/8559/8559246.png"} alt="Kyoto Games" className="logo"/><img src={"https://i.ibb.co/jvMNzj1/Captura-de-pantalla-2022-11-20-174024-removebg-preview.png"} alt="Kyoto Games" className="logoLetra"/></Link>
                <Links/>
                <NavLink to="/carrito"><CartWidget numero="0" /></NavLink>
            </nav>
        </>
    )
}

export default NavBar