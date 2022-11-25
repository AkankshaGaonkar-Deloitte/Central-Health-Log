package com.CentralHealthLog.service;


import com.CentralHealthLog.entity.Pulse;
import com.CentralHealthLog.repository.PulseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PulseService {

    @Autowired
    PulseRepository pulseRepo;

    public List<Pulse> getallPulse(){
        return pulseRepo.findAll();
    }
}
