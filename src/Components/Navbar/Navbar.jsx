import './Navbar.css'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
function NavPrincipal() {

    const handleOpenNav = (e) =>{
        console.log(e.target);
        let btn= e.target;
        let objetivo = btn.getAttribute("data-objetivo");
        let navActivo = btn.getAttribute("data-navactivo")
        const nav = document.getElementById(objetivo);
        const navResponsive = document.getElementById(navActivo);
        nav.classList.toggle("Navbar");
        nav.classList.toggle("showNav")
        navResponsive.classList.toggle("activo")
    }

    return (
        <>
        
        <div className='NavbarResponsive' id='navResponsive'>
            <div className="logoResponsive">
                <img src="./src/assets/FLYER 2.png" width={250}></img>
            </div>
        <button data-navactivo="navResponsive" data-objetivo="navContent" className='btnNavResp' onClick={(e) =>{handleOpenNav(e)}}><svg data-navactivo="navResponsive" data-objetivo="navContent" xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="none"  data-navactivo="navResponsive" data-objetivo="navContent" stroke="#fff" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14"></path></svg></button>

            </div>
            <div className='Navbar' id='navContent'>
            <div className="Nav" >
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div className="logo">
                <img src="./src/assets/FLYER 2.png" width={250}></img>
            </div>
            <div className="redes">
                <ul>
                    <li><a href="#"><FaInstagram /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                </ul>
            </div>
            
        </div>
            </>
    )
}
export default NavPrincipal