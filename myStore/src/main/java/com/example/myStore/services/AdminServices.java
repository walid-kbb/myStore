package com.example.myStore.services;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myStore.dao.AdminRepository;
import com.example.myStore.entities.Admin;
@CrossOrigin(origins = "*")
@RestController
public class AdminServices {
	@Autowired
	AdminRepository adminRepository;
	
	@GetMapping("/admin")
	Admin getAdmin() {
		return adminRepository.findById((long) 1).get();
	}
	
	@PutMapping("/admin")
	Admin updatePassword(@RequestBody String passwordToHash) throws NoSuchAlgorithmException {
		String hash = "35454B055CC325EA1AF2126E27707052";
		
		Admin admin=adminRepository.findById((long) 1).get();
		
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
        String password = sb.toString();
	    
		admin.setPassword(password);
		adminRepository.save(admin);
		return admin;
	}
	

}
