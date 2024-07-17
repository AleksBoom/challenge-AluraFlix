import styles from "./Card.module.css"
import borrar from "./BotonBorra.png"
import editar from "./Botoneditar.png"

function Card({id, capa, titulo}){
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <div className={styles.botonesContainer}>
                <img src={borrar} alt="Icono Borrar"/>
                <img src={editar} alt="Icono de editar"/>
            </div>
           

        </div>
    )
}

export default Card