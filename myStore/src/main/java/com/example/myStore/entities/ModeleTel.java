package com.example.myStore.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ModeleTel {

	public ModeleTel() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public ModeleTel(String modele, float prix, String description) {
		super();
		this.modele = modele;
		this.prix = prix;
		this.description = description;
		
	}



	private long id;
	private String modele;
	private MarqueTel marque;
	private float prix;
	private String description;
	private Caracteristiques caracteristiques;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getModele() {
		return modele;
	}



	public void setModele(String modele) {
		this.modele = modele;
	}


	@ManyToOne
	@JsonIgnore
	public MarqueTel getMarque() {
		return marque;
	}



	public void setMarque(MarqueTel marque) {
		this.marque = marque;
	}



	public float getPrix() {
		return prix;
	}



	public void setPrix(float prix) {
		this.prix = prix;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}


	@OneToOne(mappedBy ="telephone")
	public Caracteristiques getCaracteristiques() {
		return caracteristiques;
	}



	public void setCaracteristiques(Caracteristiques caracterstiques) {
		this.caracteristiques = caracterstiques;
	}



	@Override
	public String toString() {
		return "ModeleTel [id=" + id + ", modele=" + modele + ", marque=" + marque + ", prix=" + prix + ", description="
				+ description + ", caracterstiques=" + caracteristiques + "]";
	}




	
	
	

}
