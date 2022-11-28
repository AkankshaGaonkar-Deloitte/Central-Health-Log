package com.CentralHealthLog.requests;

import lombok.Getter;
public class AuthenticationResponse {

    // Authentication response for sending the JWT token as response
    private @Getter String JwtToken;
    public AuthenticationResponse(String jwtToken) {
        this.JwtToken = jwtToken;
    }
}
