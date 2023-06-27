import styles from "./mystyle.module.css";
import {useState} from 'react';

function Home() {

    const [welcome, setWelcome] = useState('')
    const [i, setI] = useState(0)
    const hi =["Welcome", "Hola"]
    
    const changeHello = setTimeout(() => {
        setWelcome(hi[i])  
        setI((i + 1) % hi.length)
    }, 3000)

    const handleChangeHello = (e)=>{
        changeHello(e.target.value)
    }
    return( 
        <div className={styles.homeimg}>
            <img src='https://as1.ftcdn.net/v2/jpg/02/43/66/34/1000_F_243663429_D6ABEB1Gi71LBnOBbfhQ1V0ahXS8uZKx.jpg'/>
            <h1 className={styles.hi} onChange={handleChangeHello}>{welcome}</h1>
            <img src= "https://plus.unsplash.com/premium_photo-1672784158736-aed766276e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1718&q=80" alt="Jumprope" />        
        </div>
    );
}

export default Home

