package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Medication;
import com.CentralHealthLog.entity.PastRecord;
import com.CentralHealthLog.service.MedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MedicationController {

    @Autowired
    private MedicationService medicationService;

    @GetMapping("/patient/medications/{id}")
    public List<Medication> getAllMedications(@PathVariable Long id){
        return medicationService.getAllMedications(id);
    }

    @PostMapping("/patient/medications")
    public ResponseEntity<Medication> addMedication(@RequestBody Medication medication){
        Medication savedMedication = medicationService.addMedication(medication);
        return new ResponseEntity<Medication>(savedMedication, HttpStatus.CREATED);
    }

    @DeleteMapping("/patient/medications/{id}")
    public ResponseEntity<Medication> removeOrDeleteMedication(@PathVariable Long id){
        Medication retrievedMedication = medicationService.deleteOrRemoveMedicationById(id);
        return new ResponseEntity<Medication>(retrievedMedication, HttpStatus.OK);
    }
}
