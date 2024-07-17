
import styles from "./CampoTexto.module.css"



function CampoTexto(props){
    
    const placeholderModificado=`${props.placeholder}`

    const manejarCambio =(e)=>{
     
        props.actualizarValor(e.target.value)
    }
    return(
        <div className={styles.campoTexto}>
            <label className={styles.campoTextoLabel}>{props.titulo}</label>
            <input 
            className={styles.campoTextoInput } 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            />
           
        </div>

    )
}

export default CampoTexto