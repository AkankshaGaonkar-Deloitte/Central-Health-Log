package com.CentralHealthLog.service;


import com.CentralHealthLog.entity.BMI;
import com.CentralHealthLog.entity.BloodPressure;
import com.CentralHealthLog.entity.Pulse;
import com.CentralHealthLog.repository.BMIRepo;
import com.CentralHealthLog.repository.BloodPressureRepo;
import com.CentralHealthLog.repository.PulseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GraphService {

    @Autowired
    PulseRepository pulseRepo;
    @Autowired
    BloodPressureRepo bprepo;
    @Autowired
    BMIRepo bmiRepo;

    public List<Pulse> getallPulse(){
        return pulseRepo.findAll();
    }
    public List<BloodPressure> getallBLoodPressure(){
        return bprepo.findAll();
    }
    public List<BMI> getallBMI(){
        return bmiRepo.findAll();
    }
}
