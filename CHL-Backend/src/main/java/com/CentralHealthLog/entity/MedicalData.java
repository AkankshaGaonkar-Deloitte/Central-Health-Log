package com.CentralHealthLog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicalData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long patientId;
    private Boolean isCurrent;
    private Double height;
    private Double weight;
    private Double bmi;
    private Double pulseRate;
    private String bloodPressure;
    private String bloodGroup;
    private String allergies;
    private String immunizations;
    private String chronicHealthProblems;
    private String familyMedicalHistory;

}

