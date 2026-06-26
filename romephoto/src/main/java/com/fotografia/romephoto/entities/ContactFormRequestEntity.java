package com.fotografia.romephoto.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name="richieste_form_contatto")
public class ContactFormRequestEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fname;

    private String lname;

    private String email;

    private String phone;

    private String message;

    private Boolean acceptancePP;

    // Timestamp per tracciare quando la richiesta viene creata o modificata
    private LocalDateTime dataInvioRichiesta;
    private LocalDateTime dataModificaRichiesta;

    @PrePersist
    public void onCreate() {
        dataInvioRichiesta = LocalDateTime.now();
        dataModificaRichiesta = LocalDateTime.now();
    }

    @PreUpdate
    public void onUpdate() {
        dataModificaRichiesta = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getAcceptancePP() {
        return acceptancePP;
    }

    public void setAcceptancePP(Boolean acceptancePP) {
        this.acceptancePP = acceptancePP;
    }

    public LocalDateTime getDataInvioRichiesta() {
        return dataInvioRichiesta;
    }

    public void setDataInvioRichiesta(LocalDateTime dataInvioRichiesta) {
        this.dataInvioRichiesta = dataInvioRichiesta;
    }

    public LocalDateTime getDataModificaRichiesta() {
        return dataModificaRichiesta;
    }

    public void setDataModificaRichiesta(LocalDateTime dataModificaRichiesta) {
        this.dataModificaRichiesta = dataModificaRichiesta;
    }
    
}
