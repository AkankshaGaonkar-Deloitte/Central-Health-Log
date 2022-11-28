package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.roles;
import org.springframework.data.jpa.repository.JpaRepository;
public interface RoleRepository extends JpaRepository<roles,Integer> {

    roles findByName(String name);
}
