package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.MedicalData;
import com.CentralHealthLog.repository.MedicalDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalDataService {
    @Autowired
    private MedicalDataRepository medicalDataRepository;

    public MedicalData getVitalsById(Long id) {
        return medicalDataRepository.findById(id).orElse(null);
    }

    public MedicalData updateVitals(MedicalData medicalData) {
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
