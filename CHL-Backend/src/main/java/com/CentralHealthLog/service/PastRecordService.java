package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.PastRecord;
import com.CentralHealthLog.repository.PastRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class PastRecordService {

    @Autowired
    private PastRecordRepository pastRecordRepository;

    public PastRecord addRecord(PastRecord pastRecord){
        return pastRecordRepository.save(pastRecord);
    }

    public List<PastRecord> getAllPatientRecords(Long patientId){
        return pastRecordRepository.findByPatientId(patientId).get();
    }

    public List<PastRecord> filterByDoctor(Long patientId, Long doctorId) {
        return pastRecordRepository.findByPatientIdAndDoctorId(patientId, doctorId).get();
    }

    public List<PastRecord> filterByDate(Long patientId, String from, String to) throws ParseException {
        System.out.println("Date parsed: " + new SimpleDateFormat("yyyy-MM-dd").parse(from));
        Date fromDate = new SimpleDateFormat("yyyy-MM-dd").parse(from);
        Date toDate = new SimpleDateFormat("yyyy-MM-dd").parse(to);
        return pastRecordRepository.findByPatientIdAndUploadDateBetween(patientId, fromDate, toDate).get();
    }
}
