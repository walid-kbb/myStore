package com.example.myStore;

import java.security.MessageDigest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.myStore.dao.AdminRepository;
import com.example.myStore.dao.MarqueTelRepository;
import com.example.myStore.dao.ModeleTelRepository;
import com.example.myStore.entities.Admin;
import com.example.myStore.entities.MarqueTel;
import com.example.myStore.entities.ModeleTel;

@SpringBootApplication
public class MyStoreApplication implements CommandLineRunner {
	@Autowired
	AdminRepository adminRepository;
	@Autowired
	MarqueTelRepository marqueTelRepository;
	@Autowired
	ModeleTelRepository modeleTelRepository;
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
		
		
		MarqueTel marque =  new MarqueTel("Samsung", null);
		System.out.println(marque);
		marqueTelRepository.save(marque);
		
		MarqueTel marque2 =  new MarqueTel("Apple", null);
		System.out.println(marque2);
		marqueTelRepository.save(marque2);
		
		ModeleTel modele1 = new ModeleTel("Galaxy Note 20 Ultra",811,"description");
		marque=marqueTelRepository.findById(marque.getId()).get();
		marque.getModeles().add(modele1);
		modele1.setMarque(marque);
		modele1.setMarqueName(marque.getMarque());
		marqueTelRepository.save(marque);
		
		ModeleTel modele2 = new ModeleTel("iPhone 12 Pro Max",751,"description");
		marque2=marqueTelRepository.findById(marque2.getId()).get();
		marque2.getModeles().add(modele2);
		modele2.setMarque(marque2);
		modele2.setMarqueName(marque2.getMarque());
		marqueTelRepository.save(marque2);
		
	}

}
