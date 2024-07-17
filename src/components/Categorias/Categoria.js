import styles from "./Categorias.module.css";
import Card from "components/Card";



function Categoria(props){
    
    return(
        <>
        <section className={styles.categoria} >
            <h1 style={{backgroundColor: props.datos.color}}>{props.datos.titulo}</h1>
        </section>
        <div className={styles.container}>
        <Card 
          id="1" 
          titulo="Como utilizar el Display block, inline, inline-block"
          capa="https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png"
            />
        <Card 
          id="1" 
          titulo="Como utilizar el Display block, inline, inline-block"
          capa="https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png"
            />
            <Card 
          id="1" 
          titulo="Como utilizar el Display block, inline, inline-block"
          capa="https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png"
            />
            <Card 
          id="1" 
          titulo="Como utilizar el Display block, inline, inline-block"
          capa="https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png"
            />
        </div>
        
        </>
    )
}
export default Categoria