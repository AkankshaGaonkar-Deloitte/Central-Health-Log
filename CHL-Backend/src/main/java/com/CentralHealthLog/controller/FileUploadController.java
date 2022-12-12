package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.PastRecord;
import com.CentralHealthLog.entity.Prescription;
import com.CentralHealthLog.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;

@RestController
@CrossOrigin("*")
public class FileUploadController {

    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping("/patient/past-record/prescription")
    public ResponseEntity<Prescription> addPrescription(@RequestBody MultipartFile prescription) throws SQLException, IOException {
        try {
            System.out.println(prescription.getContentType());
            Prescription savedPrescription =  prescriptionService.addPrescription(prescription);
            return new ResponseEntity(savedPrescription, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }
}
