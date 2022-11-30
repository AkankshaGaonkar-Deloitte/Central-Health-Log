package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Long> {

     String findByUsername(String username);
}