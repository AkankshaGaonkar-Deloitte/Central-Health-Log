package com.CentralHealthLog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vitals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private float height;
    private float weight;
    private String blood_group;
    private float bmi;
    private String Chronic_health_problems;
    private  String immunizations;
    private String chronic_health_problems;
    private  String family_medical_history;


}

