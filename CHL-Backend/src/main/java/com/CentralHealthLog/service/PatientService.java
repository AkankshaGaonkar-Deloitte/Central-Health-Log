package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.exception.UsernameAlreadyExistsException;
import com.CentralHealthLog.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient savePatient(Patient patient) {
//        if (patientRepository.findByUsername(patient.getUsername())!=null)
//        {  throw new UsernameAlreadyExistsException("Username already exists!!");}
        return patientRepository.save(patient);
    }
//
//
//    public void checkIfUserExist(String username) {

//        Patient patient=patientRepository.findByUsername(username).get();

    //        return patientRepository.findByUsername(username) !=null ? true : false;}
    public List<Patient> getPatient() {
        return patientRepository.findAll();
    }
}



