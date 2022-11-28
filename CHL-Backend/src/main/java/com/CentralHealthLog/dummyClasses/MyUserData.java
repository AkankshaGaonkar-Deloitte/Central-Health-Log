package com.CentralHealthLog.dummyClasses;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.*;
public class MyUserDetails implements UserDetails {
    //    private String userName;
//    private String password;
//    private Set<EmployeeRole> roles=new HashSet<>();
//
//    private List<GrantedAuthority> authorities;
//
//    private Employees employee;
//
//    public MyUserDetails(Employees employee) {
//        this.userName= employee.getUserName();
//        this.password=employee.getPassword();
//        this.roles=employee.getRoles();
//    }
    private User user;
    public MyUserDetails(User user){
        this.user=user;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for (UserRole role : user.getRoles()) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return authorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUserName();
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    //    public String getFirstName(){return employee.getFirstName();}
//    public String getLastName(){return employee.getLastName();}
//    public String getDesignation(){return employee.getDesignation();}
    public User getEmployee() {
        return user;
    }
}
