package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.BloodPressure;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BloodPressureRepo extends JpaRepository<BloodPressure,Long> {
}
