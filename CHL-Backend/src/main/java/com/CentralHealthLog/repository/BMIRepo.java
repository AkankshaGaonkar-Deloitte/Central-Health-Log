package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.BMI;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BMIRepo extends JpaRepository<BMI,Long> {
}
