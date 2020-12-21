package com.example.myStore.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Caracteristiques {

	public Caracteristiques() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public Caracteristiques(long id, ModeleTel telephone, int poids, float taille, String os) {
		super();
		this.id = id;
		this.telephone = telephone;
		this.poids = poids;
		this.taille = taille;
		Os = os;
	}



	private long id;
	private ModeleTel telephone;
	private int poids;
	private float taille;
	private String Os;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}


	@OneToOne
	public ModeleTel getTelephone() {
		return telephone;
	}


	
	public void setTelephone(ModeleTel telephone) {
		this.telephone = telephone;
	}



	public int getPoids() {
		return poids;
	}



	public void setPoids(int poids) {
		this.poids = poids;
	}



	public float getTaille() {
		return taille;
	}



	public void setTaille(float taille) {
		this.taille = taille;
	}



	public String getOs() {
		return Os;
	}



	public void setOs(String os) {
		Os = os;
	}

	
}
