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

    public MedicalData saveMedicalData(MedicalData medicalData) {
        MedicalData existingMedicalData = medicalDataRepository.findById(medicalData.getId()).orElse(null);
        if (existingMedicalData.getBmi() != 0)
            existingMedicalData.setBmi(medicalData.getBmi());

        if (existingMedicalData.getHeight() != 0)
            existingMedicalData.setHeight(medicalData.getHeight());

        if (existingMedicalData.getWeight() != 0)
            existingMedicalData.setWeight(medicalData.getWeight());

        if (medicalData.getAllergies() != null) {
            existingMedicalData.setAllergies(medicalData.getAllergies());
        }
        if (medicalData.getFamilyMedicalHistory() != null) {
            existingMedicalData.setFamilyMedicalHistory(medicalData.getFamilyMedicalHistory());
        }
        if (medicalData.getBloodGroup() != null) {
            existingMedicalData.setBloodGroup(medicalData.getBloodGroup());
        }
        if (medicalData.getImmunizations() != null) {
            existingMedicalData.setImmunizations(medicalData.getImmunizations());
        }
        if (medicalData.getChronicHealthProblems() != null) {
            existingMedicalData.setChronicHealthProblems(medicalData.getChronicHealthProblems());
        }

        return medicalDataRepository.save(existingMedicalData);
    }

}
