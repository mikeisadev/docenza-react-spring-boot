import { useEffect, useState } from "react"

import Tabella from "./Tabella";

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

                    <Tabella 
                        colonne={memoria.colonne}
                        righe={memoria.righe}
                    />

                </div>
            </div>
        </section>
    )
}