package com.fotografia.romephoto.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fotografia.romephoto.dto.ContactFormRequestDTO;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class FormSubmissionController {

    @PostMapping("/form-contatto")
    public ResponseEntity<Object> handleFormRequest(@RequestBody ContactFormRequestDTO data) {
        var successResponse = Map.of(
            "status", "success",
            "requestSent", LocalDateTime.now(),
            "sentData", data
        );
        
        return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(successResponse);
    }
    
    
}
