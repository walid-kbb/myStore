package com.example.myStore.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myStore.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}
