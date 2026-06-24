# Affiancare un frontend in React a un backend in Java Spring Boot
- Assicurarsi che il frontend sia in una cartella isolata (es. `frontend`)
- Creare il backend con Spring Initialzr (sito web ufficiale o plugin di VS Code)

## Configurare il backend
- Avviare XAMPP, Laragon, MAMP o la soluzione che hai
- Aggiungere un database SQL su PhpMyAdmin
- Configurare il file application.properties: database, porta del server e stringa di connessione al database
- Avviare il backend:
    1) Da terminale
    2) Dal plugin VS Code Spring Boot Dashboard
    3) Identifica il file Entry-Point del backend (che finisce con "...Application.java) e clicca sul suggerimento in alto "run"

## Scrivere codice backend
- Aggiungiamo la cartella "controllers" dentro la cartella del backend
- Creare la classe controller e aggiungere le annotazioni: 
    - @RestController
    - @RequestMapping("/namespace")
    - -- DURANTE LA LEZIONE VEDERE LA CONFIGURAZIONE CORS --