import styles from './NavBar.module.css'
import { Link } from "react-router-dom";

export default function NavMenu({to, children}){
    return(
     <Link  className={styles.navLink} to={to} >{children}</Link>    
    )
}