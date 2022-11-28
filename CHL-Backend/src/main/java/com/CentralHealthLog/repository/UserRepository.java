package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.ClientUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<ClientUser,Long> {
  ClientUser findByUserName(String userName);
}
