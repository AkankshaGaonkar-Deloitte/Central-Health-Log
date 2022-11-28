package com.CentralHealthLog.exception;

public class UnauthorizedException extends RuntimeException{

    // Exception class to handle the UnauthorizedException

    public UnauthorizedException(String message) {
        super(message);
    }

    public UnauthorizedException(String message, Throwable cause) {
        super(message, cause);
    }

    public UnauthorizedException(Throwable cause) {
        super(cause);
    }
}