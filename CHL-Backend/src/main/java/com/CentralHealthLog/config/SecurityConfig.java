package com.CentralHealthLog.config;

import com.CentralHealthLog.filter.JwtFilter;
import com.CentralHealthLog.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {



    // Security Configuration for the API gateway
    private static final String[] AUTH_WHITELIST = { // APIs that doesn't require authorization
    };
    private static final String[] Admin_list = {  // APIs that require admin authorization
    };
    @Autowired
    private userService userservice;
    @Autowired
    private JwtFilter jwtFilter;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userservice);
    }

    // PasswordEncoder
    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }


    //authorization
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.cors();
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.authorizeRequests().antMatchers(AUTH_WHITELIST)
                .permitAll().and()
                .authorizeRequests().antMatchers(Admin_list).hasRole("ADMIN").
                and().authorizeRequests().anyRequest().authenticated().and().
                sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new
                UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }


    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }
}

