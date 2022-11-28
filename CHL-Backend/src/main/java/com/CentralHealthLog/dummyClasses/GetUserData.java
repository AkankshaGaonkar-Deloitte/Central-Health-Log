package com.CentralHealthLog.dummyClasses;

import lombok.Data;
public @Data class GetUserData {

    // Dummy class to extract the userDate from the request body
    private Integer Id;
    private String userName;
    private String password;
    private String roles;
    public GetUserData() {
    }

    public GetUserData(Integer id, String userName, String password, String roles) {
        Id = id;
        this.userName = userName;
        this.password = password;
        this.roles = roles;
    }
}