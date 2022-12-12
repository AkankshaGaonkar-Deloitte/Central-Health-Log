package com.CentralHealthLog.service;

import com.CentralHealthLog.constants.StatusCode;
import com.CentralHealthLog.entity.Doctor;
import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor saveDoctor(Doctor doctor){
        doctor.setStatusCode(StatusCode.TO_BE_REGISTERED.name());
        return doctorRepository.save(doctor);
    }
    public Doctor getDoctorByUsername(String username) {
        return doctorRepository.findByUsername(username).orElse(null);
    }
    public Doctor getDoctorByContact(String phoneNo) {
        return doctorRepository.findByPhoneNo(phoneNo).orElse(null);
    }
    public Doctor getDoctorById(Long id){
        return doctorRepository.findById(id).get();
    }
}
