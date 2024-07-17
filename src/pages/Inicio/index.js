import Baners from "components/Baners/Baner";
import Encabezado from "components/Cabecera/Encabezado";
import styles from "./index.modules.css";
import Categoria from "components/Categorias/Categoria";





function Inicio(){
    

    const registrarVideo=(video)=>{
        console.log("Nuevo video",video)
    }

//Lista de categorias
    const categorias=[
        {
            titulo:"FRONT END",
            color:  "#2bf8e2"
        },
        {
             titulo:"BACK END",
            color:  "#33ff5b"
        },
        {
            titulo:"INOVACION Y GESTION",
            color:"#f8e82b"
    
        }
    ]
    return(
        <>
        <Encabezado></Encabezado>
        <Baners></Baners>

        <section className={styles.container}>
        {
            categorias.map((categoria)=> <Categoria datos={categoria} key={categoria.titulo}/>)
        }
        </section>

        
        </>
        
    )
}

export default Inicio