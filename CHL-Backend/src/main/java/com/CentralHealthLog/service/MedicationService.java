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

    public List<Medication> getAllMedications(Long id){
        return medicationRepository.findByPatientId(id).get();
    }

    public Medication deleteOrRemoveMedicationById(Long id){
        Medication retrievedMedication = medicationRepository.findById(id).get();
        //System.out.println("------------------------------------------->deletion: " + retrievedMedication);
        if (retrievedMedication != null){
            if (retrievedMedication.getIsCurrent() == true){
                retrievedMedication.setIsCurrent(false);
                addMedication(retrievedMedication);
            } else if(retrievedMedication.getIsCurrent() == false){
                medicationRepository.delete(retrievedMedication);
            }
            return retrievedMedication;
        }else
            throw new IllegalStateException("Medication does not exist with given Id");

    }
}
