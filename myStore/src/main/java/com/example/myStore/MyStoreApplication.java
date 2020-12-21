package com.example.myStore;

import java.security.MessageDigest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.myStore.dao.AdminRepository;
import com.example.myStore.entities.Admin;

@SpringBootApplication
public class MyStoreApplication implements CommandLineRunner {
	@Autowired
	AdminRepository adminRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(MyStoreApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		String passwordToHash ="admin";
		String password;
		
		String hash = "35454B055CC325EA1AF2126E27707052";
	
	    
	    // Create MessageDigest instance for MD5
	    MessageDigest md = MessageDigest.getInstance("MD5");
	    //Add password bytes to digest
	    md.update(passwordToHash.getBytes());
	    //Get the hash's bytes 
	    byte[] bytes = md.digest();
	    //This bytes[] has bytes in decimal format;
        //Convert it to hexadecimal format
        StringBuilder sb = new StringBuilder();
        for(int i=0; i< bytes.length ;i++)
        {
            sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
        }
        //Get complete hashed password in hex format
        password = sb.toString();
        
		Admin admin = new Admin("admin",password);
		adminRepository.save(admin);
		
	}

}
