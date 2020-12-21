package com.example.myStore.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class MarqueTel {

	public MarqueTel() {
		// TODO Auto-generated constructor stub
	}
	
	
	public MarqueTel(long id, String marque, List<ModeleTel> modeles) {
		super();
		this.id = id;
		this.marque = marque;
		this.modeles = modeles;
	}


	private long id;
	private String marque;
	private List<ModeleTel> modeles;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getMarque() {
		return marque;
	}


	public void setMarque(String marque) {
		this.marque = marque;
	}

	@OneToMany(mappedBy = "marque",cascade = CascadeType.ALL)
	public List<ModeleTel> getModeles() {
		return modeles;
	}


	public void setModeles(List<ModeleTel> modeles) {
		this.modeles = modeles;
	}


	@Override
	public String toString() {
		return "MarqueTel [id=" + id + ", marque=" + marque + ", modeles=" + modeles + "]";
	}
	
	

}
