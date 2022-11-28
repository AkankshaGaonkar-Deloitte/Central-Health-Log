package com.CentralHealthLog.exception;

public class BadRequestException extends RuntimeException{

    // Exception class to handle the BadRequestException

    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException(String message, Throwable cause) {
        super(message, cause);
    }

    public BadRequestException(Throwable cause) {
        super(cause);
    }
}