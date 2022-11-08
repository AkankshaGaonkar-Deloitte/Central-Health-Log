package com.CentralHealthLog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    private String doctorName;

    private String aadhaarNo;

    private Integer registrationNo;

    private Integer yearOfReg;

    private String stateMedicalCouncil;

    private String qualification;

    private String email;

    private String phoneNo;

    private String speciality;

    private Integer age;

    private String gender;

    private String address;

    private String statusCode;
}
