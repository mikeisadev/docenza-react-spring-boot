package com.fotografia.romephoto.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class WebsiteDataController {

    @GetMapping("/servizi")
    public ResponseEntity<Object> getService() {
        var colonne = Map.of(
            "col-1", "Nome servizio",
            "col-2", "Prezzo servizio",
            "col-3", "Durata servizio"
        );

        var righe = Map.of(
            "row-1", List.of("Cortometraggio", "300€", "2h"),
            "row-2", List.of("Shooting prodotti sito ecommerce", "500€", "3h"),
            "row-3", List.of("Book fotografico", "500€", "3h"),
            "row-4", List.of("Matrimonio", "1500€", "1 giornata")
        );

        var oggettoRisposta = Map.of(
            "colonne", colonne,
            "righe", righe
        );

        return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(oggettoRisposta);
    }
    
    @GetMapping("/galleria")
    public ResponseEntity<Object> getGallery() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new HashMap<>() {{
                    put("galleria", "fotografica");
                }});
    }

    @PostMapping("path")
    public String postMethodName(@RequestBody RequestBody request) {
        String nome = request.
        
        return entity;
    }
    
    
}
