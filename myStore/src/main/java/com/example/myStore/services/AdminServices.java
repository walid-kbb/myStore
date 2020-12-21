package com.example.myStore.services;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myStore.dao.AdminRepository;

@RestController
public class AdminServices {

	AdminRepository adminRepository;
	

}
