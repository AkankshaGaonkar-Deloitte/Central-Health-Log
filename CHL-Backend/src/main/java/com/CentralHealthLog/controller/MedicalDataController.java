package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.Vitals;
import com.CentralHealthLog.service.MedicalDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MedicalDataController {

    @Autowired
    private MedicalDataService medicalDataService;



    @GetMapping("/products")
    public List<Vitals> findAllProducts() {
        return medicalDataService.getProducts();
    }

    @GetMapping("/productById/{id}")
    public Vitals findProductById(@PathVariable Long id) {
        return medicalDataService.getProductById(id);
    }
    @PutMapping("/update")
    public Vitals updateProduct(@RequestBody Vitals product) {
        return medicalDataService.updateProduct(product);
    }


}
