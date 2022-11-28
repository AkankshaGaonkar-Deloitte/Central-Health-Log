package com.CentralHealthLog.service;

import com.CentralHealthLog.dummyClasses.MyUserDetails;
import com.CentralHealthLog.entity.ClientUser;
import com.CentralHealthLog.exception.BadRequestException;
import com.CentralHealthLog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<User> user = userRepository.findByUserName(username);
//        return user.map(MyUserDetails.java::new).get();
//    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<ClientUser> user = Optional.ofNullable(userRepository.findByUserName(userName));
        return user.map(MyUserDetails::new).get();
    }

    //have to found whether exception is working or not
    public List<ClientUser> getAllEmployees() {
        if (userRepository.findAll().isEmpty()) {
            throw new BadRequestException("The employee List is Empty !!!");
        }
        List<ClientUser> employeeList = new ArrayList<>();
        userRepository.findAll().forEach(employeeList::add);
        return employeeList;
    }
}
