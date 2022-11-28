package com.CentralHealthLog.service;

import com.CentralHealthLog.entity.roles;
import com.CentralHealthLog.exception.ApiErrorResponse;
import com.CentralHealthLog.exception.NotFoundException;
import com.CentralHealthLog.exception.UnauthorizedException;
import com.CentralHealthLog.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class Roleservices {
    @Autowired
    private RoleRepository roleRepository;
    public roles addRole(roles employeeRole) {
        if(roleRepository.findByName(employeeRole.getName())!=null){
            throw new NotFoundException("Role already exists");
        }
        return roleRepository.save(employeeRole);
    }

    //Not sure
    public roles updateRole(roles employeeRole,Integer roleId) {
        Optional<roles> role=roleRepository.findById(roleId);
        if(!role.isPresent()){
            throw new NotFoundException("Role doesn't exist");
        }
        role.get().setName(employeeRole.getName());
        return roleRepository.save(role.get());
    }

    public List<roles> getAllRoles() {
        List<roles> rolesList=new ArrayList<>();
        roleRepository.findAll().forEach(rolesList::add);
        if(rolesList.isEmpty()){
            throw new NotFoundException("No roles found!");
        }
        return rolesList;
    }

    public Optional<roles> getRole(Integer id) {
        Optional<roles> employeeRole= roleRepository.findById(id);
        if(!employeeRole.isPresent()){
            throw new NotFoundException("No role found!");
        }
        return employeeRole;
    }


    @ExceptionHandler
    public ResponseEntity<ApiErrorResponse> handleException(NotFoundException e){
        ApiErrorResponse errorResponse = new ApiErrorResponse();
        errorResponse.setMessage(e.getMessage());
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        errorResponse.setTimestamp(System.currentTimeMillis());
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    // Exception Handler to handle the UnauthorizedException
    @ExceptionHandler
    public ResponseEntity<ApiErrorResponse> handleException(UnauthorizedException e){
        ApiErrorResponse errorResponse = new ApiErrorResponse();
        errorResponse.setMessage(e.getMessage());
        errorResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
        errorResponse.setTimestamp(System.currentTimeMillis());
        return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
    }
}