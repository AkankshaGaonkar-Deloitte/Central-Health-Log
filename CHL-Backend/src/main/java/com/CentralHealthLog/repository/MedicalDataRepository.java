package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.Patient;
import com.CentralHealthLog.entity.Vitals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalDataRepository extends JpaRepository<Vitals,Long> {
    Vitals findByID(Long id);
}

