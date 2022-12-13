package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.Doctor;
import com.CentralHealthLog.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Optional<Doctor> findByUsername(String username);
    Optional<Doctor> findByPhoneNo(String phoneNo);

    List<Doctor> findByStatusCode(String statusCode);
}