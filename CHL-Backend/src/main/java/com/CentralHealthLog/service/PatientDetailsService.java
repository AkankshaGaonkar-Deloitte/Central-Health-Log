package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientDetailsService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient getPatientById(Long id){
        return patientRepository.findById(id).get();
    }

    public Patient savePatient(Patient patient){
        return patientRepository.save(patient);
    }
}
