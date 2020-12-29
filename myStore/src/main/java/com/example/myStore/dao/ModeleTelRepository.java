package com.example.myStore.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.myStore.entities.ModeleTel;

public interface ModeleTelRepository extends JpaRepository<ModeleTel, Long> {
	
	@Query("select m from ModeleTel m where m.modele= ?1")
	List<ModeleTel> findByName(String modele);

	@Query("SELECT m FROM ModeleTel m WHERE m.modele LIKE %?1%")
	List<ModeleTel> findByNameLike(String modele);
}
