package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.PastRecord;
import com.CentralHealthLog.service.PastRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PatientController {

    @Autowired
    private PastRecordService pastRecordService;

    @PostMapping("/patient/past-record")
    public ResponseEntity<PastRecord> addPastRecord(@RequestBody PastRecord pastRecord) {
        System.out.println(pastRecord);
        PastRecord savedRecord = pastRecordService.addRecord(pastRecord);
        return new ResponseEntity<PastRecord>(savedRecord, HttpStatus.OK);
    }

    @GetMapping("/patient/past-record/{patientId}")
    public List<PastRecord> getAllPatientRecords(@PathVariable Long patientId) {
        List<PastRecord> records = pastRecordService.getAllPatientRecords(patientId);
        return records;
    }

    @GetMapping("/patient/past-record/{patientId}/filter-by-doctor/{doctorId}")
    public List<PastRecord> filterByDoctor(@PathVariable Long patientId, @PathVariable Long doctorId){
        return pastRecordService.filterByDoctor(patientId, doctorId);
    }

}
