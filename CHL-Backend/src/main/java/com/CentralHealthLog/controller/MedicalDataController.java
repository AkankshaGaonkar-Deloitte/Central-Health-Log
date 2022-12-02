package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.MedicalData;
import com.CentralHealthLog.service.MedicalDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class MedicalDataController {

    @Autowired
    private MedicalDataService medicalDataService;

    @GetMapping("/patient/medical-data/{patientId}")
    public MedicalData getMedicalDataById(@PathVariable Long patientId){
        return medicalDataService.getMedicalDataByPatientId(patientId);
    }
}
