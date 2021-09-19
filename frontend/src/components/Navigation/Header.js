import styles from './Header.module.css';


export default function Header(){

    return(
        <div className={styles.header}>
            <li>
                <a className={styles.link}href="https://github.com/heyarnold23">
                    GITHUB
                </a>
            </li>
            <li>
                <a className={styles.link} href="https://www.linkedin.com/in/arnold-cabang-615932216/">
                    LINKEDIN
                </a>
            </li>
        </div>
    )
}
