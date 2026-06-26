import { useState } from 'react';
import DatiFormDTO from '../dto/DatiFormDTO';

export default function SectionFour() {
    const [datiForm, sovrascriviDatiForm] = useState(new DatiFormDTO());
    const [formResponse, setFormResponse] = useState(null);

    /**
     * Funzione specifica per gestire i campi di testo
     */
    function handleUserInput(event) {
        console.log(event.target.name, event.target.value)

        sovrascriviDatiForm({...datiForm, [event.target.name]: event.target.value})
    }

    /**
     * Funzione specifica per gestire le checkbox
     */
    function handleCheckboxChange(event) {
        console.log(event.target.name, event.target.checked);
        
        sovrascriviDatiForm({...datiForm, [event.target.name]: event.target.checked});
    }

    /**
     * Funzione specifica per gestire l'invio del form 
     */
    function handleFormSubmit(event) {
        /**
         * Questo codice previene il refresh del browser
         * 
         * NOTA: è importante aggiungere questa funzione perché il browser quando
         * intercetta l'invio di un form fa il refresh di default
         */
        event.preventDefault();

        /**
         * DOPO IMPLEMENTARE LA VALIDAZIONE FRONT-END
         * 
         * NOTA TECNICA: LA VALIDAZIONE BACKEND DEVE ESSERE 
         * SEMPRE PRIORITARIA E DEVE ESSERE IMPLEMENTATA 
         * SEMPRE PER MOTIVI DI SICUREZZA 
         */
        console.log(datiForm);

        // Inviare dati al backend
        fetch('http://localhost:8080/api/v1/form-contatto', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(datiForm)
        })
        .then(response => response.json())
        .then(response => setFormResponse(response));

    }

    return (
        <section id="sezione-form" class="site-section">
            <div class="wrapper">
                <div class="title">
                    <h2>Contattaci</h2>
                </div>

                <div class="content">

                    <div class="form-contatto">
                        {
                            formResponse ?
                                <div class="form-validation-success">
                                    {formResponse.successMessage}
                                </div>
                                : 
                                null
                        }

                        <form action="" onSubmit={handleFormSubmit}>
                            <div class="form-row">
                                <label for="">Inserisci nome</label>
                                <input type="text" placeholder="Inserisci qui il tuo nome" name="fname" onInput={handleUserInput} />
                            </div>

                            <div class="form-row">
                                <label for="">Inserisci cognome</label>
                                <input type="text" placeholder="Inserisci qui il tuo cognome" name="lname" onInput={handleUserInput} />
                            </div>

                            <div class="form-row">
                                <label for="">Inserisci email</label>
                                <input type="text" placeholder="Inserisci qui la tua email" name="email" onInput={handleUserInput} />
                            </div>

                            <div class="form-row">
                                <label for="">Inserisci numero di telefono</label>
                                <input type="text" placeholder="Inserisci qui il tuo numero di telefono" name="phone" onInput={handleUserInput}/>
                            </div>

                            <div class="form-row">
                                <label for="">Scrivi il tuo messaggio</label>
                                <textarea name="message" id="" rows="4" placeholder="Inserisci qui il messaggio" onInput={handleUserInput}>
                                </textarea>
                            </div>

                            <div>
                                <input type="checkbox" name="acceptancePP" id="" onChange={handleCheckboxChange}/>
                                <label>Cliccando su questa checkbox accetto la Privacy Policy di questo sito</label>
                            </div>

                            <div>
                                <input type="submit" name="submit-btn" value="Invia form"/>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}