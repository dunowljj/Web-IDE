package com.ogjg.back.config.security.exception;

import com.ogjg.back.common.exception.ErrorData;
import com.ogjg.back.common.exception.ErrorType;
import lombok.Getter;
import org.springframework.security.core.AuthenticationException;

@Getter
public abstract class CustomTokenException extends AuthenticationException {

    private final ErrorType errorType;
    private ErrorData errorData;


    public CustomTokenException(ErrorType errorType) {
        super(errorType.getMessage());
        this.errorType = errorType;
    }

    public CustomTokenException(ErrorType errorType, ErrorData errorData) {
        super(errorType.getMessage());
        this.errorType = errorType;
        this.errorData = errorData;
    }

}
