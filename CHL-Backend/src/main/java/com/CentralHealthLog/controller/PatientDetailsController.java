package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Medication;
import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.service.PatientDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PatientDetailsController {

    @Autowired
    private PatientDetailsService patientDetailsService;

    @GetMapping("/patient/patient-details/{id}")
    public Patient getPatientById(@PathVariable Long id){
        return patientDetailsService.getPatientById(id);
    }

    @PutMapping("/patient/patient-details")
    public ResponseEntity<Patient> savePatient(@RequestBody Patient patient){
        Patient savedPatient = patientDetailsService.savePatient(patient);
        return new ResponseEntity<Patient>(savedPatient, HttpStatus.OK);
    }
}
