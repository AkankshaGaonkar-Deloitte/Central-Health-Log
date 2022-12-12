package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Prescription;
import com.CentralHealthLog.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    public Prescription addPrescription(MultipartFile multipartFile) throws IOException {
        Prescription prescription = new Prescription();
        System.out.println("Retrieved file: " + multipartFile.getOriginalFilename() + " size: " + multipartFile.getSize());
        if (multipartFile != null)
            prescription.setPrescription(multipartFile.getBytes());
        else
            throw new RuntimeException("multipart file is null");
        prescriptionRepository.save(prescription);
        return prescription;
    }
}
