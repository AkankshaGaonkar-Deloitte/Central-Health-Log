package com.CentralHealthLog.controller;

import com.CentralHealthLog.entity.ClientUser;
import com.CentralHealthLog.exception.UnauthorizedException;
import com.CentralHealthLog.repository.RoleRepository;
import com.CentralHealthLog.repository.UserRepository;
import com.CentralHealthLog.requests.AuthenticationRequest;
import com.CentralHealthLog.requests.AuthenticationResponse;
import com.CentralHealthLog.service.UserService;
import com.CentralHealthLog.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController

public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(), authenticationRequest.getPassword())
            );
        }
        catch (BadCredentialsException e){
            throw new UnauthorizedException(e);
        }
        final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUserName());
        final String jwt = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));

    }
    @GetMapping("/patients")
    public String patients(){
        return "hii";

    }

    //returns the current  logged-in user
    @GetMapping("/current-user")
    public ClientUser getCurrentUser(Principal principal){
        return (ClientUser) this.userService.loadUserByUsername(principal.getName());
    }
}
