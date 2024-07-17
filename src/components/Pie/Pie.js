import styles from "./Pie.module.css"
import logo from "./logoAluraFlix.png"


function Pie(){
    return(
    <footer className={styles.pie}>
        <section className={styles.logoContainer}>
                <img src={logo} alt="Logo Alura"/>
            </section>
        
    </footer>

    )
}

export default Pie