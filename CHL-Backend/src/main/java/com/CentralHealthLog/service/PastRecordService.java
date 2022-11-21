package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.PastRecord;
import com.CentralHealthLog.repository.PastRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
