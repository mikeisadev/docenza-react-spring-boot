
export default function SectionOne() {

    return (
        <section id="main-hero-section">
            <div className="wrapper">
                <div className="hero-title">
                    <h2>Siamo uno studio<br/>fotografico a Roma</h2>
                </div>
                <div className="hero-actions">
                    <button id="btn1" className="btn-standard pulsante-stile-1" onclick="alert('Aiuto, mi hai cliccato!')">
                        Contattaci ora
                        <i className="bi bi-arrow-right-square-fill"></i>
                    </button>
                    <button id="btn2" className="btn-standard pulsante-stile-2"
                        onclick="alert('Andiamo sulla pagina galleria')">
                        Vedi galleria
                        <i className="bi bi-card-image"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}