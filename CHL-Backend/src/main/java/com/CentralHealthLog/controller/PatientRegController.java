package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/patient")
public class PatientRegController {
    @Autowired
    private PatientService patientService;

    @PostMapping
    public ResponseEntity<Patient> addNewPatient(@RequestBody Patient patient) {
        patientService.savePatient(patient);
        return new ResponseEntity<Patient>(patient, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Patient>>getPatient()
    {
        List<Patient> patients = patientService.getPatient();
            return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> findPatientById(@PathVariable long id)
    {
        Patient patient = patientService.getPatientById(id);
        return new ResponseEntity<Patient>(patient, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Patient> updatePatient(@RequestBody Patient patient) {
         Patient patients = patientService.updatePatientDetails(patient);
        return new ResponseEntity<Patient>(patients, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable long id){
         patientService.deletePatient(id);
         return new ResponseEntity<>("Deleted Successfully",HttpStatus.OK);
    }








}
