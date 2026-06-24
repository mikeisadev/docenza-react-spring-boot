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
                <h1>LogoSito</h1>

                <nav>
                    <ul>
                        <li><a href="chi-siamo.html">Chi siamo</a></li>
                        <li>Contattaci</li>
                        <li>Galleria</li>
                        <li>Portfolio</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}