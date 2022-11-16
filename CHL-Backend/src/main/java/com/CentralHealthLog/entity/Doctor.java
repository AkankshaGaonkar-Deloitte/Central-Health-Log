package com.CentralHealthLog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique=true,nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String doctorName;

    private Integer registrationNo;

    private Integer yearOfReg;

    private String stateMedicalCouncil;

    private String qualification;

    @Column(unique = true)
    private String email;

    @Column(unique=true,nullable = false)
    private String phoneNo;

    private String speciality;

    private Integer age;

    private String gender;

    private String address;

    private String statusCode;
}
