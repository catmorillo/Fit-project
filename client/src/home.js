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
        <div>
            <h1 className={styles.hi} onChange={handleChangeHello}>{welcome}</h1>
            <h1 className={styles.home}></h1>
        
        
        
        </div>
    )

}

export default Home

