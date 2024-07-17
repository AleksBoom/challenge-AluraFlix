import { Link } from "react-router-dom"
import styles from "./Encabezado.module.css"
import logo from "./logoAluraFlix.png"
import CabeceraLink from "components/CabeceraLink/CabeceraLink"



function Encabezado(){
    return(
        <header className={styles.cabecera} >
            <Link to="/">
            
            <section className={styles.logoContainer}>
                <img src={logo} alt="Logo Alura"/>
            </section>
            
            </Link>
            <nav>
                <CabeceraLink url="./">
                <button>Home</button>
                </CabeceraLink>
                
                <CabeceraLink url="./Formulario">
                <button>Nuevo Video</button>
                </CabeceraLink>
            </nav>
            
            
        </header>

    )
}

export default Encabezado