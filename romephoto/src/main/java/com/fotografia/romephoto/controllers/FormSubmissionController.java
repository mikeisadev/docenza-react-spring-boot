package com.fotografia.romephoto.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.Normalizer.Form;
import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fotografia.romephoto.dto.ContactFormRequestDTO;
import com.fotografia.romephoto.repository.ContactFormRequestRepository;
import com.fotografia.romephoto.entities.ContactFormRequestEntity;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class FormSubmissionController {

    private ContactFormRequestRepository contactFormRepo;

    public FormSubmissionController(
        ContactFormRequestRepository contactFormRepo
    ) {
        this.contactFormRepo = contactFormRepo;
    }

    @PostMapping("/form-contatto")
    public ResponseEntity<Object> handleFormRequest(@RequestBody ContactFormRequestDTO data) {
        var successResponse = Map.of(
            "status", "success",
            "requestSent", LocalDateTime.now(),
            "sentData", data,
            "successMessage", "La tua richiesta è stata inviata con successo!"
        );

        /**
         * TODO: ESERCIZIO IMPLEMENTARE LA VALIDAZIONE
         * 
         * Valida ogni campo inviato dall'utente dal frontend
         * per migliorare la sicurezza del backend.
         * 
         * Vedi se l'utente ha inserito nome, cognome, email,
         * numero di telefono, messaggio e se ha accetato le
         * condizioni di privacy policy.
         * 
         * Se queste condizioni non vengono rispettate genera
         * messaggi di errore e riportali sul frontend.
         */

        /** Otteniamo la ContactFormRequestEntity */
        ContactFormRequestEntity formRichiesta = new ContactFormRequestEntity();

        /**
         * Nella entity della richiesta del form inseriamo
         * punto per punto tutti i dati riprendendoli dal 
         * DTO.
         * 
         * Quindi non posso salvare direttamente il DTO nella
         * repository.
         * 
         * Per cui predispongo una variabile della entity
         * delle richieste del form e dentro ci inserisco i dati
         * dal dto.
         */
        formRichiesta.setFname(data.getFname());
        formRichiesta.setLname(data.getLname());
        formRichiesta.setEmail(data.getEmail());
        formRichiesta.setPhone(data.getPhone());
        formRichiesta.setMessage(data.getMessage());
        formRichiesta.setAcceptancePP(data.getAcceptancePP());

        /**
         * Ora salvo i dati nel database usando il metodo
         * save della repository
         */
        this.contactFormRepo.save(formRichiesta);

        /**
         * TODO: Implementa la funzionalità di invio 
         * mail all'utente che ha fatto richiesta
         */
        
        /**
         * Rispondo con la response entity ritornando 
         * l'oggetto "successResponse"
         */
        return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(successResponse);
    }
    
    
}
