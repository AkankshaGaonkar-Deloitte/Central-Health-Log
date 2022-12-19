package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.Admin;
import com.CentralHealthLog.entity.Doctor;
import com.CentralHealthLog.entity.PastRecord;
import com.CentralHealthLog.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface AdminRepository extends JpaRepository<Admin,Long> {
    Optional<Admin> findByUsername(String username);

}
