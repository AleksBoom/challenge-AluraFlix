import { useState } from "react"
import styles from "./Formulario.module.css"
import CampoTexto from "../../components/CampoTexto/CampoTexto"
import ListaOpciones from "../../components/ListaOpciones/ListaOpciones"
import Boton from "../../components/Boton/Boton"

function Formulario(props){
    const [Titulo,actualizarTitulo] = useState("") 
    const [Categoria,actualizarCategoria] = useState("")
    const [Imagen,actualizarImagen] = useState("")
    const [Video,actualizarVideo] = useState("")
    const [Descripcion,actualizarDescripcion] = useState("")

   



    const manejarEnvio=(event)=>{
        event.preventDefault()
        let datosAEnviar={
            Titulo:Titulo,
            Categoria:Categoria,
            Imagen:Imagen,
            Video:Video,
            Descripcion:Descripcion
        }
        console.log(datosAEnviar)
        
        
    }
    return (
    <section className={styles.formulario}>
        <form onSubmit={manejarEnvio} className={styles.formularioForm}>
            <h1>NUEVO VIDEO</h1>
            <h3>Complete el formulario para crear una nueva tarjeta de video</h3>
            <div className={styles.crearTitulo}>
                <h2>Crear Tarjeta</h2>
            </div>
            
            <CampoTexto 
            titulo="Titulo" 
            placeholder="Ingresa el titulo" 
            required={true}
            valor={Titulo}
            actualizarValor={actualizarTitulo}
            />
            <ListaOpciones 
            titulo="Categoria"  
            required={true}
            valor={Categoria}
            actualizarCategoria={actualizarCategoria}

            />

            <CampoTexto 
            titulo="Imagen" 
            placeholder="el enlace es obligatorio" 
            required={true}
            valor={Imagen}
            actualizarValor={actualizarImagen}/>

            <CampoTexto 
            titulo="Video" 
            placeholder="Ingrese el enlace del video" 
            required={true}
            valor={Video}
            actualizarValor={actualizarVideo}
            />
            <CampoTexto
             titulo="Descripcion" 
             placeholder="¿De que trata este video?"
             valor={Descripcion}
             actualizarValor={actualizarDescripcion}
             />
            <Boton texto="Crear"/>
            <Boton texto="Limpiar"/>

        </form>
    </section>
    )
}

export default Formulario