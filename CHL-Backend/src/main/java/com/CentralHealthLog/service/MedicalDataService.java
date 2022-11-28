package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Vitals;
import com.CentralHealthLog.repository.MedicalDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalDataService {
    @Autowired
    private MedicalDataRepository medicalDataRepository;

    public List<Vitals> getProducts() {
        return medicalDataRepository.findAll();
    }

    public Vitals getProductById(Long id) {
        return medicalDataRepository.findById(id).orElse(null);
    }

    public Vitals updateProduct(Vitals vitals) {
        Vitals existingVitals = medicalDataRepository.findById(vitals.getId()).orElse(null);
        existingVitals.setBmi(vitals.getBmi());
        existingVitals.setHeight(vitals.getHeight());
        existingVitals.setWeight(vitals.getWeight());

        existingVitals.setFamily_medical_history(vitals.getFamily_medical_history());
        existingVitals.setBlood_group(vitals.getBlood_group());
        existingVitals.setImmunizations(vitals.getImmunizations());


        return medicalDataRepository.save(existingVitals);
    }

}
