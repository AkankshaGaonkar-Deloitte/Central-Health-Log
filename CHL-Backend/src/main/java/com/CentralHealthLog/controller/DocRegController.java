package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Doctor;
import com.CentralHealthLog.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class DocRegController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/doctor")
    public ResponseEntity<Doctor> addNewDoctor(@RequestBody Doctor doctor){
        System.out.println(doctor);
        Doctor savedDoctor = doctorService.saveDoctor(doctor);
        return new ResponseEntity<Doctor>(savedDoctor, HttpStatus.OK);
    }

}