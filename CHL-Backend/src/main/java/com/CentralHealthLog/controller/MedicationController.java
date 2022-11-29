package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Medication;
import com.CentralHealthLog.service.MedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MedicationController {

    @Autowired
    private MedicationService medicationService;

    @GetMapping("/patient/medications")
    public List<Medication> getAllMedications(){
        return medicationService.getAllMedications();
    }
}
