package com.CentralHealthLog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String username;
    private String password;
//    private String hospital_name;
//    private String speciality;
//    private int contact_number;

//    private List<Doctor> to_be_registered_doctors;
//    private List<Doctor> in_progress;
//    private List<Doctor> registered_doctors;


}
