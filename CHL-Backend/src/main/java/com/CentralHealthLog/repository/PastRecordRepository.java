package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.PastRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PastRecordRepository extends JpaRepository<PastRecord, Long> {
}
