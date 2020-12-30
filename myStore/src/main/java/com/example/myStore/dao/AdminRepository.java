package com.example.myStore.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.myStore.entities.Admin;


public interface AdminRepository extends JpaRepository<Admin, Long> {

	
}
