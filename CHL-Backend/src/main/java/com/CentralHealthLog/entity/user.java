package com.CentralHealthLog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data

public class user {

    @Id
    @GeneratedValue
    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;
}
