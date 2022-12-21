package com.CentralHealthLog.controller;


import com.CentralHealthLog.entity.Admin;
import com.CentralHealthLog.entity.Doctor;
import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminService service;
    @GetMapping("/admin/id/{id}")
//    @RequestMapping(value = "/admin/{id}", method = RequestMethod.GET)
    public ResponseEntity<Admin> GetAdminByID(@PathVariable long id){
        Admin admin= service.getAdminByID(id);
        return new ResponseEntity <Admin> (admin,HttpStatus.OK);
    }
    @GetMapping("/admin/username/{username}")
    public ResponseEntity<Admin> GetAdminByUsername(@PathVariable String username){
        Admin admin = service.getAdminByUsername(username);
        return new ResponseEntity <Admin> (admin, HttpStatus.OK);
    }

    @GetMapping(value = "/doctor/{status_code}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity <List<Doctor>> get_all_to_be_registered_doctors(@PathVariable String status_code){
        List<Doctor> doctors = service.get_doctors_based_on_status_code(status_code);
        return new ResponseEntity <List<Doctor>> (doctors, HttpStatus.OK);
    }
    @GetMapping("/doctor/{id}/{status_code}")
    public ResponseEntity <Doctor> get_all_to_be_registered_doctor(@PathVariable long id,@PathVariable String status_code){
        Doctor doctor = service.get_doctor_by_status_code_and_id(id, status_code);
        return new ResponseEntity <Doctor> (doctor, HttpStatus.OK);
    }

    @PutMapping("/doctor/{id}/{status_code}")
    public ResponseEntity<Doctor> update_doctor_status(@PathVariable long id, @PathVariable String status_code)
    {
        Doctor doctor = service.updateDoctorStatus(id, status_code);
        return new ResponseEntity<>(doctor, HttpStatus.OK);
    }

    @PutMapping("/doctor/update")
    public ResponseEntity<Doctor> updateDoctor(@RequestBody Doctor doctor)
    {
        Doctor updatedDoctor = service.updateDoctor(doctor);
        return new ResponseEntity<>(updatedDoctor, HttpStatus.OK);
    }

    @DeleteMapping("/doctor/{id}")
    public void delete_doctor_by_id(@PathVariable long id) {
        System.out.println("Doctor id to be deleted: " + id);
        service.deleteDoctor(id);
    }

//    @GetMapping(value = "/in-progress",produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity <List<Doctor>> get_all_in_progress_doctors(){
//        List<Doctor> doctors = service.get_all_in_progress_Doctors();
//        return new ResponseEntity <List<Doctor>> (doctors, HttpStatus.OK);
//    }
//
//    @GetMapping(value = "/registered",produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity <List<Doctor>> get_all_registered_doctors(){
//        List<Doctor> doctors = service.get_all_registered_Doctors();
//        return new ResponseEntity <List<Doctor>> (doctors, HttpStatus.OK);
//    }


//    @GetMapping("/to-be-registered/{id}")
//    public Admin get_all_to_be_registered_doctors_by_id(@PathVariable long id){
//        return service.get_to_be_registered_Doctors_By_Id(id);
//
//    }

//    @GetMapping("/get-in-progress-dotcors")
//    public List<Admin> get

//    @PutMapping("/update-status")
//    public Admin updateStatus (@RequestBody Admin admin){
//        return service.updateStatus(admin);
//    }

//    @PostMapping("/add-to-be-registered-doctors")
//    public Admin add_to_be_registered_Doctors(@RequestBody Admin admin){
//        return service.save_to_be_registered_Doctors(admin);
//    }
}
