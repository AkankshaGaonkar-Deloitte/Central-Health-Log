package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.Pulse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PulseRepository extends JpaRepository<Pulse,Long> {
}
