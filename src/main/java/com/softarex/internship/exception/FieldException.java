package com.softarex.internship.exception;

public class FieldException extends Exception{
    public FieldException() {}

    public FieldException(String message) {
        super(message);
    }

    public FieldException(String message, Throwable cause) {
        super(message, cause);
    }

    public FieldException(Throwable cause) {
        super(cause);
    }
}
