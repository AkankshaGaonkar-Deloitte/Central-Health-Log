package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.entity.Vitals;
import com.CentralHealthLog.repository.MedicalDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalDataService {
    @Autowired
    private MedicalDataRepository medicalDataRepository;

//    public List<Vitals> getProducts() {
//        return medicalDataRepository.findAll();
//    }

    public Vitals getVitalsById(Long id) {
        return medicalDataRepository.findById(id).orElse(null);
    }

    public Vitals updateVitals(Vitals vitals) {
        Vitals existingVitals = medicalDataRepository.findById(vitals.getId()).orElse(null);
        existingVitals.setBmi(vitals.getBmi());
        existingVitals.setHeight(vitals.getHeight());
        existingVitals.setWeight(vitals.getWeight());
        if(vitals.getAllergies() != null){
        existingVitals.setAllergies(vitals.getAllergies());}
        if(vitals.getFamily_medical_history() != null){
        existingVitals.setFamily_medical_history(vitals.getFamily_medical_history());}
        if(vitals.getBlood_group() != null){
        existingVitals.setBlood_group(vitals.getBlood_group());}
        if(vitals.getImmunizations() != null){
        existingVitals.setImmunizations(vitals.getImmunizations());}

        return medicalDataRepository.save(existingVitals);
    }

}
