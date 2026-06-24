import { useEffect, useState } from "react"

export default function SectionThree() {
    const [memoria, modificaMemoria] = useState({})

    useEffect(
        () => {
            console.log("Hey, pagina caricata!")

            fetch("http://localhost:8080/api/v1/servizi")
                .then(response => response.json())
                .then(response => modificaMemoria(response))
        },
        []
    );

    return (
        <section id="sezione-prezzo" class="site-section">
            <div class="wrapper">
                <div class="title">
                    <h2>I nostri prezzi</h2>
                </div>

                <div class="content">

                    <div class="tabella-prezzo">
                        {/* <div class="colonna">Nome servizio</div>
                        <div class="colonna">Prezzo servizio</div>
                        <div class="colonna">Durata</div>

                        <div class="riga-dato">Cortometraggio</div>
                        <div class="riga-dato">300€</div>
                        <div class="riga-dato">2h</div>

                        <div class="riga-dato">Shooting prodotti sito ecommerce</div>
                        <div class="riga-dato">500€</div>
                        <div class="riga-dato">3h</div> */}

                        {
                            // Colonne tabella
                            (memoria.colonne) ? 

                                Object.keys(memoria.colonne).map(colKey => {
                                    return <div className="colonna">{memoria.colonne[colKey]}</div>
                                }) 
                            
                                : 

                                <div>Caricamento...</div>
                        }

                        {
                            // Righe tabella
                            (memoria.righe) ?

                                Object.keys(memoria.righe).map(rowKey => {
                                    return memoria.righe[rowKey].map(data => {
                                        return <div className="riga-dato">{data}</div>
                                    })
                                })

                                :

                                <div>Caricamento...</div>
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}