package com.CentralHealthLog.requests;

import lombok.Data;
public @Data class AuthenticationRequest {

    // Authorization request body for authorization of a user
    private String userName;
    private String password;
    AuthenticationRequest(){}
    public AuthenticationRequest(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
}