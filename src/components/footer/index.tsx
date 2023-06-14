import './index.scss'
import logo from '../../assets/img/285-401-max.png'

export default function Footer (){
    return(
        <footer>
            <nav>
                <img srcSet={logo} alt="" />
                <a href="/">Accueil</a>
                <a href="/collection">Collection</a>
                <a href="/wanted">Recherché</a>
                <a href="/about">A propos</a>
            </nav>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam accusantium voluptates eveniet? At quaerat voluptates eligendi officia iusto maiores et placeat quisquam ex corporis optio delectus quo, molestiae itaque quos.
            </p>
        </footer>
    )
}