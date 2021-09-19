import {VscGithubAlt} from 'react-icons/vsc'
import {AiFillLinkedin} from 'react-icons/ai'

import styles from './Footer.module.css'


export default function Footer (){

    return(
        <div className={styles.main}>
            <div className={styles.mainText}>
                Unravel is a clone site of Genius.
                The world's biggest collection of song lyrics and musical
                knowledge.
                <div className={styles.icons}>
                    <a className={styles.icon}href="https://github.com/heyarnold23">
                    <VscGithubAlt />
                    </a>
                    <a className={styles.icon} style={{marginLeft: '10px'}} href="https://www.linkedin.com/in/arnold-cabang-615932216/">
                    <AiFillLinkedin />
                    </a>
                </div>
            </div>
            <div className={styles.column1}>
                <p>Developed by Arnold Cabang</p>
            </div>
            {/* <div className={styles.column2}>

            </div> */}
        </div>
    )

}
