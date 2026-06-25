import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            <div className="lang-selector">
                <div className="lang-wrapper">
                    <p>Seleziona lingua</p>
                    <div className="lang-buttons">
                        <button className="btn-lang-selector" meta-lang="it_IT">🇮🇹</button>
                        <button className="btn-lang-selector" meta-lang="en_UK">🇬🇧</button>
                        <button className="btn-lang-selector" meta-lang="ru_RU">🇷🇺</button>
                        <button className="btn-lang-selector" meta-lang="es_ES">🇪🇸</button>
                        <button className="btn-lang-selector" meta-lang="fr_FR">🇫🇷</button>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <h1><Link to="/">LogoSito</Link></h1>

                <nav>
                    <ul>
                        <li><Link to="/chi-siamo">Chi siamo</Link></li>
                        <li><Link to="/contattaci">Contattaci</Link></li>
                        <li><Link to="/galleria">Galleria</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}