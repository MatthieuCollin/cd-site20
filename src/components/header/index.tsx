import './index.scss'
import logo from '../../assets/img/285-401-max.png'


export default function Header (){
    return(
            <header>
                <img srcSet={logo} alt="" />
                <div className="searchbar">

                </div>
                <nav>
                    <a href="/">Accueil</a>
                    <a href="/collection">Collection</a>
                    <a href="/wanted">Recherché</a>
                    <a href="/about">A propos</a>

                </nav>
            </header>
        )
}