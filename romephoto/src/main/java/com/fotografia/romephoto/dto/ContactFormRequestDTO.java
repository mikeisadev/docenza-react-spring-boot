package com.fotografia.romephoto.dto;

public class ContactFormRequestDTO {

    private String fname;
    private String lname;
    private String email;
    private String phone;
    private String message;
    private Boolean acceptancePP;
    
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

    
    
}
