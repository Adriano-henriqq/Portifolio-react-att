import styles from './MenuContatos.module.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function MenuContatos(){
    return(
        <ul className={styles.lista}>
            <li>
                <a href='https://github.com/Adriano-henriqq'><GitHubIcon fontSize='large'  /></a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/adriano-henrique-medeiros-85b95b180/'><LinkedInIcon fontSize='large' /></a>
            </li>
            
        </ul>
    )
}