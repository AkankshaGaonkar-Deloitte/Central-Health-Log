package com.CentralHealthLog.service;

import com.CentralHealthLog.dummyClasses.MyUserDetails;
import com.CentralHealthLog.exception.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class userService {

    @Autowired
    private userRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = Optional.ofNullable(userRepository.findByUserName(username));
        return user.map(MyUserDetails::new).get();
    }

    //have to found whether exception is working or not
    public List<User> getAllEmployees() {
        if (userRepository.findAll().isEmpty()) {
            throw new BadRequestException("The employee List is Empty !!!");
        }
        List<User> employeeList = new ArrayList<>();
        userRepository.findAll().forEach(employeeList::add);
        return employeeList;
    }
}
