package com.CentralHealthLog.controller;


import com.CentralHealthLog.entity.Vitals;
import com.CentralHealthLog.service.MedicalDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MedicalDataController {

    @Autowired
    private MedicalDataService medicalDataService;



//    @GetMapping("/vitals")
//    public List<Vitals> findAllProducts() {
//        return medicalDataService.getProducts();
//    }


    @GetMapping("/vitals/{id}")
    public Vitals findVitalsById(@PathVariable Long id) {
        return medicalDataService.getVitalsById(id);
    }
    @PutMapping("/vitals")
    public Vitals updateVitals(@RequestBody Vitals vitals) {
        return medicalDataService.updateVitals(vitals);
    }


}
