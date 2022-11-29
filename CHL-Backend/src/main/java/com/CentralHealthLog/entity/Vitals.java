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
    private float bmi;
    private float pulseRate;
    private float bloodPressure;
    private String bloodGroup;
    private String allergies;
    private String immunizations;
    private String chronicHealthProblems;
    private String familyMedicalHistory;

}

