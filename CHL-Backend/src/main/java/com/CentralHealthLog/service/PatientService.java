package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.exception.UsernameAlreadyExistsException;
import com.CentralHealthLog.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public String savePatient(Patient patient) {
//        if(checkIfUserExist(patient.getUsername())){  throw new UsernameAlreadyExistsException("Username already exists!!");}
            patientRepository.save(patient);
            return "Customer added successfully";
        }
//
//
//    public boolean checkIfUserExist(String username) {
//        return patientRepository.findByUsername(username) !=null ? true : false;
//    }
}



