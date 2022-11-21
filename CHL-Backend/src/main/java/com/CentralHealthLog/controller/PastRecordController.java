package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.PastRecord;
import com.CentralHealthLog.service.PastRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PastRecordController {

    @Autowired
    private PastRecordService pastRecordService;

    @PostMapping("/past-record")
    public ResponseEntity<PastRecord> addPastRecord(@RequestBody PastRecord pastRecord) {
        System.out.println(pastRecord);
        PastRecord savedRecord = pastRecordService.addRecord(pastRecord);
        return new ResponseEntity<PastRecord>(savedRecord, HttpStatus.OK);
    }

}
