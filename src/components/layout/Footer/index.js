import { FaGithub, FaLinkedin } from "react-icons/fa"
import style from './Footer.module.css'

export default function Footer () {
    return (
        <footer>
            <a className={style.a} href="https://github.com/dev-davisouza" target="_blank"><FaGithub/></a> 
            <FaLinkedin/>
        </footer>
    )
}