package com.CentralHealthLog;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableEncryptableProperties
public class CentralHealthLogApplication {

	public static void main(String[] args) {
		System.out.println("hi");
		SpringApplication.run(CentralHealthLogApplication.class, args);
	}
}
