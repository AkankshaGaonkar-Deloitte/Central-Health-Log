package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.Medication;
import com.CentralHealthLog.entity.PastRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MedicationRepository extends JpaRepository<Medication, Long> {

    Optional<List<Medication>> findByPatientId(Long patientId);

}
