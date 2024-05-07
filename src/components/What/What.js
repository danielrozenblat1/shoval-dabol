import styles from "./What.module.css"

const What=(props)=>{

    return <>
    <div className={styles.what}>
    <div className={styles.buttonWrapper}><button className={styles.button}>לקביעת תור</button></div>
  <div className={styles.left}>
<h1 className={styles.title}>{props.title}</h1>
<h2 className={styles.description}>{props.description}</h2>

</div>
<div className={styles.right}>
<img className={styles.image} src={props.src}/>
    </div>
    
    </div>
    </>


}
export default What