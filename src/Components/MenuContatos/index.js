import styles from './MenuContatos.module.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function MenuContatos(){
    return(
        <ul className={styles.lista}>
            <li>
                <a href='#ssd'><GitHubIcon fontSize='large'  /></a>
            </li>
            <li>
                <a href='https'><LinkedInIcon fontSize='large' /></a>
            </li>
            
        </ul>
    )
}