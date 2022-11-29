package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Medication;
import com.CentralHealthLog.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicationService {

    @Autowired
    private MedicationRepository medicationRepository;

    public Medication addMedication(Medication medication){
        return medicationRepository.save(medication);
    }

    public List<Medication> getAllMedications(){
        return medicationRepository.findAll();
    }

    public Medication deleteOrRemoveMedicationById(Long id){
        Medication retrievedMedication = medicationRepository.findById(id).get();
        if (retrievedMedication != null){
            if (retrievedMedication.isCurrent() == true){
                retrievedMedication.setCurrent(false);
                addMedication(retrievedMedication);
            } else if(retrievedMedication.isCurrent() == false){
                medicationRepository.delete(retrievedMedication);
            }
            return retrievedMedication;
        }else
            return null;

    }
}
