package com.CentralHealthLog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Admin {

    @Id
    @GeneratedValue
    private Long id;
    private String doctor_name;
    private String hospital_name;
    private String speciality;
    private int contact_number;

}
