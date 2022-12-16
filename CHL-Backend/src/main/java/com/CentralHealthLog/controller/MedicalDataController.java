package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.MedicalData;
import com.CentralHealthLog.service.MedicalDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class MedicalDataController {

    @Autowired
    private MedicalDataService medicalDataService;

    @GetMapping("/patient/medical-data/{patientId}")
    public MedicalData getMedicalDataById(@PathVariable Long patientId){
        return medicalDataService.getMedicalDataByPatientId(patientId);
    }

    @PostMapping("/patient/medical-data")
    public ResponseEntity<MedicalData> addNewMedicalData(@RequestBody MedicalData medicalData){
        System.out.println("--------------------> " + medicalData.toString());
        MedicalData savedMedicalData = medicalDataService.saveMedicalData(medicalData);
        return new ResponseEntity<MedicalData>(savedMedicalData, HttpStatus.CREATED);
    }
}
