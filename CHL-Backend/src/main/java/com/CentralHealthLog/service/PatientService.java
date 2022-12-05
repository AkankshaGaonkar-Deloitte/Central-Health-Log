package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }
    public List<Patient> savePatients(List<Patient> patients){
        return patientRepository.saveAll(patients);
    }

    public List<Patient> getPatient() {
        return patientRepository.findAll();
    }
    public Patient getPatientById(long id) {
        return patientRepository.findById(id).orElse(null);
    }
    public Patient getPatientByUsername(String username) {
        return patientRepository.findByUsername(username).orElse(null);
    }
    public Patient getPatientByContact(Long phoneNo) {
        return patientRepository.findByPhoneNo(phoneNo).orElse(null);
    }
    public void deletePatient(Long id){
        patientRepository.deleteById(id);
    }

    public  Patient updatePatientDetails(Patient patient){
        Patient existingPatient = patientRepository.findById(patient.getId()).orElse(null);
        if (patient.getFirstname() != null)
        {
            System.out.println(patient.getFirstname()+" Request body firstname.");
            existingPatient.setFirstname(patient.getFirstname());
        }
        if (patient.getLastname() != null) {
            existingPatient.setLastname(patient.getLastname());
        }
        if (patient.getAge() != null){
        existingPatient.setAge(patient.getAge());}
        if(patient.getGender() != null){
        existingPatient.setGender(patient.getGender());}
        if(patient.getEmail() != null){
        existingPatient.setEmail(patient.getEmail());}
        if(patient.getPhoneNo() != null){
        existingPatient.setPhoneNo(patient.getPhoneNo());}
        if(patient.getAddress() != null){
        existingPatient.setAddress(patient.getAddress());}
        System.out.println("prasad is debugging errors"+ existingPatient.getFirstname());
        return patientRepository.save(existingPatient);

    }

}


//       if (patientRepository.findByUsername(patient.getUsername())!=null)
//        {  throw new UsernameAlreadyExistsException("Username already exists!!");}
//         public void checkIfUserExist(String username) {
//        Patient patient=patientRepository.findByUsername(username).get();
//        return patientRepository.findByUsername(username) !=null ? true : false;}