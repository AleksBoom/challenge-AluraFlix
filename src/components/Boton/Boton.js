import styles from "./Boton.module.css"

function Boton(props){
    return(
        <button className={styles.boton}>{props.texto}</button>

    )
}

export default Boton