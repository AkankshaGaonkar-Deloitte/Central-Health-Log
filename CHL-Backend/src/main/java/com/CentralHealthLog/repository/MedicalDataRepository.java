package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.MedicalData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MedicalDataRepository extends JpaRepository<MedicalData,Long> {
    Optional<MedicalData> findByPatientIdAndIsCurrentTrue(Long patientId);
}

