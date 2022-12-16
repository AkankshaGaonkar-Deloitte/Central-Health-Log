package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Prescription;
import com.CentralHealthLog.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;

@RestController
@CrossOrigin("*")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping("/patient/past-record/prescription")
    public ResponseEntity<Prescription> addPrescription(@RequestBody MultipartFile prescription) throws SQLException, IOException {
        try {
            System.out.println(prescription.getContentType());
            Prescription savedPrescription =  prescriptionService.addPrescription(prescription);
            return new ResponseEntity(savedPrescription, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/patient/past-record/verify-prescription")
    public ResponseEntity<String> verifyPrescription(@RequestBody MultipartFile prescription) throws SQLException, IOException {
        try {
            System.out.println(prescription.getContentType());
            boolean found = prescriptionService.verifyPrescription(prescription);
            System.out.println(found);
            if (found == true)
                return new ResponseEntity<String>(new String("Prescription Verified!"), HttpStatus.FOUND);
            else if (found == false){
                return new ResponseEntity<String>(new String("Invalid prescription!"), HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("At outer return");
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/patient/past-record/prescription/{id}")
    public Prescription getPrescriptionById(@PathVariable Long id){
        return prescriptionService.getPrescriptionById(id);
    }
}
