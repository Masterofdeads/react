import CartWindget from "./CartWindget";
import Boton from "./Boton"
import "../components/Navbar.css"
const Navbar = () =>{
    return (<navbar className="navbar">
        <img src="./" />
        <Boton text = {"Zapatillas"}/>
        <Boton text = {"Indumentaria"}/>
        <Boton text = {"Accesorios"}/>
        <CartWindget cont="{1}"/>
    </navbar>
    )
}
export default Navbar