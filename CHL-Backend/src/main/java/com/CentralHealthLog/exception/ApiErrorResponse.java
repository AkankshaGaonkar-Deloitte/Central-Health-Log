package com.CentralHealthLog.exception;

import lombok.Data;

public @Data class ApiErrorResponse {

    // API error response class to send back the custom error response for API access

    private int status;
    private String message;
    private long timestamp;
    public ApiErrorResponse() {
    }
    public ApiErrorResponse(int status, String message, long timestamp) {
        this.status = status;
        this.message = message;
        this.timestamp = timestamp;
    }
}