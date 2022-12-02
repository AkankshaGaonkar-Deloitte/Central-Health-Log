package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.MedicalData;
import com.CentralHealthLog.repository.MedicalDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalDataService {
    @Autowired
    private MedicalDataRepository medicalDataRepository;

    public MedicalData getMedicalDataByPatientId(Long patientId) {
        MedicalData medicalData = medicalDataRepository.findByPatientIdAndIsCurrentTrue(patientId).get();
        if (medicalData == null)
            throw new IllegalStateException("Medical data not found for patient with id " + patientId);
        System.out.println("Medical data found for patient with id " + patientId + ": " + medicalData);
        return medicalData;
    }

    public MedicalData saveMedicalData(MedicalData medicalData){
        MedicalData retrievedMedicalData = medicalDataRepository
                .findByPatientIdAndIsCurrentTrue(medicalData.getPatientId()).get();
        retrievedMedicalData.setIsCurrent(false);
        medicalDataRepository.save(retrievedMedicalData);

        medicalData.setId(Long.valueOf(-1));
        return medicalDataRepository.save(medicalData);

    }

}
