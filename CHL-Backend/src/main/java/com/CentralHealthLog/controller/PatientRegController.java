package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PatientRegController {
    @Autowired
    private PatientService patientService;

    @PostMapping("/patient")
    public ResponseEntity<Patient> addNewPatient(@RequestBody Patient patient) {
        patientService.savePatient(patient);
        return new ResponseEntity<Patient>(patient, HttpStatus.OK);
    }
    @GetMapping("/patient")
    public ResponseEntity<List<Patient>>getPatient()
    {
        List<Patient> patients = patientService.getPatient();
            return new ResponseEntity<>(patients, HttpStatus.OK);
    }
}
