package com.example.myStore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myStore.dao.CaracteristiquesRepository;
import com.example.myStore.dao.ModeleTelRepository;
import com.example.myStore.entities.Caracteristiques;
@CrossOrigin(origins = "*")
@RestController
public class CaracteristiquesServices {

	@Autowired	
	CaracteristiquesRepository caracteristiquesRepository;
	@Autowired
	ModeleTelRepository modelTelRepository;

	@GetMapping("/caractersitques")
	public List<Caracteristiques> getCaracteristiques()
	{
		return caracteristiquesRepository.findAll();
	
	}
	
	@PostMapping("/modeles/{modeleId}/caractersitques")
	public void addCaracteristiques(@PathVariable long modeleId,@RequestBody Caracteristiques caract) {
		Caracteristiques caracterstiques = new Caracteristiques();
		caracterstiques.setOs(caract.getOs());
		caracterstiques.setPoids(caract.getPoids());
		caracterstiques.setTaille(caract.getTaille());
		
		caracterstiques.setTelephone(modelTelRepository.findById(modeleId).get());
		
		caracteristiquesRepository.save(caracterstiques);
	}
	
	@PutMapping("/modeles/{modeleId}/caractersitques")
	public void updateCaracteristiques (@PathVariable long modeleId,@RequestBody Caracteristiques caract) {
		
		Caracteristiques newcaracts=modelTelRepository.findById(modeleId).get().getCaracteristiques();
		newcaracts.setOs(caract.getOs());
		newcaracts.setPoids(caract.getPoids());
		newcaracts.setTaille(caract.getTaille());
		caracteristiquesRepository.save(newcaracts);
		
	}
	
	@DeleteMapping("/modeles/{modeleId}/caractersitques")
	public void deleteCaracteristiques(@PathVariable long modeleId) {
		caracteristiquesRepository.deleteById(modelTelRepository.findById(modeleId).get().getCaracteristiques().getId());
	}
	
}
