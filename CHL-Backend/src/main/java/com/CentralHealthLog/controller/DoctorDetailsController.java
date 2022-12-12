package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Doctor;
import com.CentralHealthLog.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class DoctorDetailsController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/doctor/doctor-details/{id}")
    public Doctor getPatientById(@PathVariable Long id){
        return doctorService.getDoctorById(id);
    }

}
