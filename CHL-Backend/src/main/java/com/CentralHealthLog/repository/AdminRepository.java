package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    Admin findById(String doctor_name);
}

