package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin("*")
@RequestMapping("/patient")
public class PatientRegController {
    @Autowired
    private PatientService patientService;

    @PostMapping
    public ResponseEntity<Patient> addNewPatient(@RequestBody Patient patient) {
        Patient newPatient=patientService.savePatient(patient);
        return new ResponseEntity<Patient>(newPatient, HttpStatus.OK);
    }
    @GetMapping("/user/{username}")
    public ResponseEntity<Patient> findPatientByUsername(@PathVariable String username)
    {
        Patient patient = patientService.getPatientByUsername(username);
        return new ResponseEntity<Patient>(patient, HttpStatus.OK);
    }
    @GetMapping("phone/{phoneNo}")
    public ResponseEntity<Patient> findPatientById(@PathVariable String phoneNo)
    {
        Patient patient = patientService.getPatientByContact(phoneNo);
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