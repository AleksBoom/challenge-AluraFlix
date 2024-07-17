import styles from "./Baner.module.css"
import baner from "./banerIntderecho.png"
import banerFrontEnd from "./banerIntIzquierdo.png"

function Baners(){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.flexContainer}>
                <section className={styles.banerLeft}>
                    <img src={banerFrontEnd} alt="Baner-Front-End" />
                </section>
               
            </div>

       
                
          
        </div>
    )
}

export default Baners