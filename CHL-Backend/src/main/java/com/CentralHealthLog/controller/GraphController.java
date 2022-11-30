package com.CentralHealthLog.controller;


import com.CentralHealthLog.entity.BMI;
import com.CentralHealthLog.entity.BloodPressure;
import com.CentralHealthLog.entity.Pulse;
import com.CentralHealthLog.service.GraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/graph")
public class GraphController {
    @Autowired
    GraphService graphService;
    @GetMapping("/pulse")
    public List<Pulse> getPulse(){
        return graphService.getallPulse();
    }
    @GetMapping("/bp")
    public List<BloodPressure> getBloodPressure(){
        return graphService.getallBLoodPressure();
    }
    @GetMapping("/bmi")
    public List<BMI> getBMI(){
        return graphService.getallBMI();
    }

}
