import '../../styles/layout/Nav.css'
import NavLink from "../NavLink";
const Nav = (props) => {
    return (
        <nav>
            <img src="imagenes/logo.png"></img>
            <div className="links">
            <NavLink activeClassName="activo" exact to="/Home">Inicio</NavLink>
            <NavLink activeClassName="activo" exact to = "/Contacto">Contacto</NavLink>                
            </div>
        </nav>

    )    
};
export default Nav;
