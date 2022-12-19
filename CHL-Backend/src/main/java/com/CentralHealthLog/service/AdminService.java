package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Admin;
import com.CentralHealthLog.entity.Doctor;
import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.repository.AdminRepository;
import com.CentralHealthLog.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private DoctorRepository repository;
    @Autowired
    private AdminRepository adminRepository;

//        public Admin save_to_be_registered_Doctors(Admin admin){
//            return repository.save(admin);
//        }
//
//        public List<Admin> save_to_be_registered_Doctors(List<Admin> admins){
//            return repository.saveAll(admins);
//        }
        public Admin getAdminByID(Long id){
            return adminRepository.findById(id).orElse(null);
        }
        public Admin getAdminByUsername(String username){
        return adminRepository.findByUsername(username).orElse(null);
        }

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
