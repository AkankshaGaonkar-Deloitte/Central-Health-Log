package com.CentralHealthLog.repository;

import com.CentralHealthLog.entity.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
public interface RoleRepository extends JpaRepository<Roles,Long> {

    Roles findByName(String name);
}
