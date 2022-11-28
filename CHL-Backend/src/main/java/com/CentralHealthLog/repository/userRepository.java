package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.user;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<user,String> {
    User findByUserName(String userName);
}
