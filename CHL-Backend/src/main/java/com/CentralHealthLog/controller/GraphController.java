package com.CentralHealthLog.controller;


import com.CentralHealthLog.entity.Pulse;
import com.CentralHealthLog.service.PulseService;
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
    PulseService pulseService;
    @GetMapping("/pulse")
    public List<Pulse> getPulse(){
        return pulseService.getallPulse();
    }
}
