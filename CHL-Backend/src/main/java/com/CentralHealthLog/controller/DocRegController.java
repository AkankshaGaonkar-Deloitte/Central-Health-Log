package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Doctor;
import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/doctor")
public class DocRegController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping
    public ResponseEntity<Doctor> addNewDoctor(@RequestBody Doctor doctor){
        Doctor savedDoctor = doctorService.saveDoctor(doctor);
        return new ResponseEntity<Doctor>(savedDoctor, HttpStatus.OK);
    }
    @GetMapping("/user/{username}")
    public ResponseEntity<Doctor> findDoctorByUsername(@PathVariable String username)
    {
        Doctor doctor = doctorService.getDoctorByUsername(username);
        return new ResponseEntity<Doctor>(doctor, HttpStatus.OK);
    }
    @GetMapping("/phone/{phoneNo}")
    public ResponseEntity<Doctor> findDoctorByContact(@PathVariable String phoneNo)
    {
        Doctor doctor = doctorService.getDoctorByContact(phoneNo);
        return new ResponseEntity<Doctor>(doctor, HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Doctor> findDoctorById(@PathVariable long id)
    {
        Doctor doctor = doctorService.getDoctorById(id);
        return new ResponseEntity<Doctor>(doctor, HttpStatus.OK);
    }
}
