# Collegare frontend React a backend Java Spring Boot
**Docente**: Michele Mincone
**Data**: 24/06/2026
**Tecnologie**: React, Javascript, Vite, Java, Spring Boot, SQL

# Come ottenere questa repository
Hai due metodi per scaricare questo codice:

1) Avere GIT installato sul tuo computer e usare il comando `git clone <indirizzo-di-questa-repo>` per clonare la repository sul tuo computer

2) Scarica la repository direttamente da GitHub usando il pulsante verde

# Requisiti installati sul computer
- Java
- Node
- Database SQL (MariaDB, MySQL)
- Visual Studio Code con le seguenti estensioni:
    - Language Support for Java (TM) by Red Hat
    - Extension Pack for Java (Microsoft)
    - Spring Boot Extension Pack (VMWare) [già contiene questi singoli pacchetti]
        - Spring Boot Dashboard (Microsoft)
        - Spring Boot Snippets (Developer Soapbox)
        - Spring Initilizr Java Support (Microsoft)


# Come avviare questo progetto

1) Configurare il backend:
    - assicurati di avere java, node e un database MySQL/MariaDB
    - crea un nuovo database
    - configura il file `application.properties` dentro `romephoto/src/main/resources/application.properties` e assicurati di avere inserito correttamente le seguenti proprietà:
        - spring.datasource.driver-class-name
        - spring.datasource.url
        - spring.datasource.username
        - spring.datasource.password
    - **NOTA:** leggi la [documentazione su questo link](https://docs.google.com/document/d/13gjM5Q9KsSbwOlnf4nTS6DMrmAUEwqjMSAv0fYq0k2E/edit?usp=sharing)

2) Avviare il backend:
    - Dopo che hai installato tutte le estensioni per VS Code, usa lo strumento Spring Boot Dashboard per avviare il backend. [**ALTERNATIVA**]: Vai su questo file `romephoto/src/main/java/com/fotografia/romephoto/RomephotoApplication.java` e attendi che sul metodo `m ain`appare la scritta `run`. Quindi clicca su `run` per avviare il backend.

    - Se non si verificano errori, procedi con l'avvio del frontend

    - Se si verificano errori controlla i seguenti parametri:
        - configurazione del database nel file `application.properties`
        - versione di java, per verificare questa parte segui questi step:
            - Apri il terminale e digita `java --version`
            - Controlla la versione che ottieni
            - Vai su `romephoto/pom.xml` e verifica la chiave `<properties></properties>`. Dentro `java.version` devi inserire il numero intero della versione che ottieni nel terminale
            ```xml
            <properties>
		        <java.version>25</java.version>
	        </properties>
            ```

3) Avviare il frontend:
    - Apri il terminale di VS CODE: `CMD + J` su MAC e `CTRL + J` su WINDOWS
    - Accedi alla cartella frontend con: `cd frontend`
    - Installa le dipendenze di node con: `npm i` o `npm install`
    - Avvia il dev server di Vite con: `npm run dev`

4) Inizia a svolgere l'esercizio e [clicca qui per ottenere la traccia](https://docs.google.com/document/d/1_HMJtOu5LD0QlvEB03UT4mmZm_wmGI72KEqoPXMBUqM/edit?tab=t.0)

 