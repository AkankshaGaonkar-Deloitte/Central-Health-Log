package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.Prescription;
import com.CentralHealthLog.repository.PrescriptionRepository;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.DigestInputStream;
import java.security.MessageDigest;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    public Prescription addPrescription(MultipartFile multipartFile) throws IOException {
        Prescription prescription = new Prescription();
        System.out.println("Retrieved file: " + multipartFile.getOriginalFilename() + " size: " + multipartFile.getSize());
        if (multipartFile != null){
            prescription.setPrescription(multipartFile.getBytes());
            try (InputStream is = multipartFile.getInputStream()) {
                String md5 = DigestUtils.md5Hex(is);
                prescription.setChecksum(md5);
            }
        }
        else
            throw new RuntimeException("multipart file is null");
        prescriptionRepository.save(prescription);
        return prescription;
    }

    public Prescription getPrescriptionById(Long id){
        return prescriptionRepository.findById(id).get();
    }
}
