package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Admin;
import com.CentralHealthLog.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository repository;

        public Admin save_to_be_registered_Doctors(Admin admin){
            return repository.save(admin);
        }

        public List<Admin> save_to_be_registered_Doctors(List<Admin> admins){
            return repository.saveAll(admins);
        }

        public List<Admin> get_all_to_be_registered_Doctors(){
            return repository.findAll();
        }

        public Admin get_to_be_registered_Doctors_By_Id(long id){
            return repository.findById(id).orElse(null);
        }
        public  Admin updateStatus(Admin admin){
            Admin to_be_registered_Doctors =  repository.findById(admin.getId()).orElse(null);
            if (admin.getDoctor_name() != null)
            {
                System.out.println(admin.getDoctor_name());
                to_be_registered_Doctors.setDoctor_name(admin.getDoctor_name());
            }
            if (admin.getHospital_name() != null)
            {
                System.out.println(admin.getHospital_name());
                to_be_registered_Doctors.setHospital_name(admin.getHospital_name());
            }
            if (admin.getSpeciality() != null) {
                System.out.println(admin.getSpeciality());
                to_be_registered_Doctors.setSpeciality(admin.getSpeciality());
            }
            return repository.save(to_be_registered_Doctors);
        }
}
