package com.CentralHealthLog.controller;


import com.CentralHealthLog.entity.Admin;
import com.CentralHealthLog.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {

    @Autowired
    private AdminService service;

    @PostMapping("/add-to-be-registered-doctors")
    public Admin add_to_be_registered_Doctors(@RequestBody Admin admin){
        return service.save_to_be_registered_Doctors(admin);
    }

    @GetMapping("/get-all-to-be-registered-doctors")
    public List<Admin> get_all_to_be_registered_doctors(){
        return service.get_all_to_be_registered_Doctors();
    }

    @GetMapping("/get-all-to-be-registered-doctors/{id}")
    public Admin get_all_to_be_registered_doctors_by_id(@PathVariable long id){
        return service.get_to_be_registered_Doctors_By_Id(id);

    }

    @PutMapping("/update-status")
    public Admin updateStatus (@RequestBody Admin admin){
        return service.updateStatus(admin);
    }
}
