package com.CentralHealthLog.controller;


import com.CentralHealthLog.entity.MedicalData;
import com.CentralHealthLog.service.MedicalDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class MedicalDataController {

    @Autowired
    private MedicalDataService medicalDataService;

    @GetMapping("/vitals/{id}")
    public MedicalData findVitalsById(@PathVariable Long id) {
        return medicalDataService.getVitalsById(id);
    }
    @PutMapping("/vitals")
    public MedicalData updateVitals(@RequestBody MedicalData vitals) {
        return medicalDataService.updateVitals(vitals);
    }


}
