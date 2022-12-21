package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.PastRecord;
import com.CentralHealthLog.service.PastRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class PatientController {

    @Autowired
    private PastRecordService pastRecordService;

    @PostMapping("/patient/past-record")
    public ResponseEntity<PastRecord> addPastRecord(@RequestBody PastRecord pastRecord) {
        System.out.println(pastRecord);
        PastRecord savedRecord = pastRecordService.addRecord(pastRecord);
        return new ResponseEntity<PastRecord>(savedRecord, HttpStatus.CREATED);
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

    @GetMapping("/patient/past-record/{patientId}/search-by-date/{from}/{to}")
    public List<PastRecord> filterByDate(@PathVariable Long patientId, @PathVariable String from, @PathVariable String to) throws ParseException {
        return pastRecordService.filterByDate(patientId, from, to);
    }

    @GetMapping("/patient/past-record/{patientId}/filter-by-severity/{severityFrom}/{severityTo}")
    public List<PastRecord> filterBySeverity(@PathVariable Long patientId, @PathVariable Integer severityFrom, @PathVariable Integer severityTo) {
        return pastRecordService.filterBySeverity(patientId, severityFrom, severityTo);
    }
    @GetMapping("/appointments/{patientId}")
    public Long CountById(@PathVariable Long patientId) {
        return pastRecordService.countOfRecordsById(patientId);
    }
    @GetMapping("/doc-appointments/{doctorId}")
    public Long CountByDocId(@PathVariable Long doctorId) {
        return pastRecordService.countOfRecordsByDocId(doctorId);
    }
    @GetMapping("/record/{patientId}/sortByDate")
    public List<PastRecord> SortByDate(@PathVariable Long patientId) {
        return pastRecordService.orderByUploadDate(patientId);
    }

    @GetMapping("/{patientId}/last-record")
    public PastRecord LastHealthCheckup( @PathVariable Long patientId) {
        return pastRecordService.LastAppointment(patientId);
    }

    @GetMapping("/diseases/{patientId}/{severityFrom}/{severityTo}")
    public Long CountById(@PathVariable Long patientId, @PathVariable Integer severityFrom, @PathVariable Integer severityTo) {
        return pastRecordService.countOfRecordsByIdAndSeverity(patientId,severityFrom, severityTo);
    }
    @GetMapping("/doctor/past-appointment/{doctorId}")
    public Optional<List<PastRecord>> findRecordByDocId(@PathVariable Long doctorId) {
        return pastRecordService.findByDocID(doctorId);
    }

}
