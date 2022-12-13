package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Admin;
import com.CentralHealthLog.entity.Doctor;
import com.CentralHealthLog.repository.AdminRepository;
import com.CentralHealthLog.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    private DoctorRepository repository;

//        public Admin save_to_be_registered_Doctors(Admin admin){
//            return repository.save(admin);
//        }
//
//        public List<Admin> save_to_be_registered_Doctors(List<Admin> admins){
//            return repository.saveAll(admins);
//        }

        public List<Doctor> get_doctors_based_on_status_code(String status_code){
            return repository.findByStatusCode(status_code);
        }

        public  Doctor updateDoctorStatus(long id, String status_code){
            Doctor doctor =  repository.findById(id).orElse(null);
            doctor.setStatusCode(status_code);
            return repository.save(doctor);
        }

        public void deleteDoctor(long id)
        {
             repository.deleteById(id);
        }
}
