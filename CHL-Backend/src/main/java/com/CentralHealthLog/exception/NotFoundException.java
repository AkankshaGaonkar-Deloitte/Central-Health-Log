package com.CentralHealthLog.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class NotFoundException extends RuntimeException{

    //Exception class to handle the NotFoundException

    public NotFoundException(String message, Throwable cause){
        super(message, cause);
    }
    public NotFoundException(String message) {
        super(message);
    }
    public NotFoundException(Throwable cause) {
        super(cause);
    }
}