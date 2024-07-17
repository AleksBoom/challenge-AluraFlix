import styles from "./ListaOpciones.module.css"

function ListaOpciones(props){

    const categorias=[
        "Frontend",
        "Backend",
        "Inovacion y Gestion"
    ]
    const manejarCambio=(e)=>{
        console.log("cambio",e.target.value)
        props.actualizarCategoria(e.target.value)

    }

    return(
        <div className={styles.listaOpciones}>
            <label className={styles.labelOpciones}>Categorias</label>
            <select 
            value={props.valor} 
            onChange={manejarCambio}
            className={styles.selectOpciones}
            >
                <option value="" disabled defaultValue="" hidden>
                    Seleciona una opcion
                </option>
                {categorias.map((categoria, index)=>{
                    return <option key={index}>{categoria}</option>

                })}

            </select>
        </div>
    



    )
}

export default ListaOpciones