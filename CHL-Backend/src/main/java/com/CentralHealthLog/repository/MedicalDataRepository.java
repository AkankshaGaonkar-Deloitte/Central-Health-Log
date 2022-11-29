package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.entity.Vitals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MedicalDataRepository extends JpaRepository<Vitals,Long> {
    Optional<Vitals> findById(Long id);
}

