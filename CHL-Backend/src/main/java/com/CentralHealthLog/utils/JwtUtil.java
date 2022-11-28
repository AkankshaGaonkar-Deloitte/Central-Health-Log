package com.CentralHealthLog.utils;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtUtil {

    // Jwt util class for extracting data from the jwt token
    private String SECRET = "secret";
    // Method to extract Username from the JWT token
    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    // Method to extract the Expiration for the jwt token
    public Date extractExpiration(String token){
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    public Claims extractAllClaims(String token){
        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
    }

    // Method to check whether the jwt token is expired or not
    private Boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    // Method for generating a new Jwt token
    public String generateToken(UserDetails userDetails){
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }

    // Method to create a new Jwt token for the authorization
    private String createToken(Map<String, Object> claims, String subject){
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*60*10 ))
                .signWith(SignatureAlgorithm.HS256, SECRET).compact();
    }

    // Method to validate the Jwt token
    public Boolean validateToken(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
