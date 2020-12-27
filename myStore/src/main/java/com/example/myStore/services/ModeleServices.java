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

import com.example.myStore.dao.MarqueTelRepository;
import com.example.myStore.dao.ModeleTelRepository;
import com.example.myStore.entities.MarqueTel;
import com.example.myStore.entities.ModeleTel;
@CrossOrigin(origins = "*")
@RestController
public class ModeleServices {

	@Autowired
	ModeleTelRepository modelTelRepository;
	@Autowired
	MarqueTelRepository marqueTelRepository;
	
	@GetMapping("/modeles")
	public List<ModeleTel> getModeles (){
		
		return modelTelRepository.findAll();
	
	}
	
	@PostMapping("/marques/{marqueId}")
	public ModeleTel addModele (@PathVariable long marqueId,@RequestBody ModeleTel modeletel) {
		ModeleTel modele = new ModeleTel();
		modele.setMarqueName(marqueTelRepository.findById(marqueId).get().getMarque());
		modele.setDescription(modeletel.getDescription());
		modele.setModele(modeletel.getModele());
		modele.setPrix(modeletel.getPrix());
		
		
		MarqueTel marque= marqueTelRepository.findById(marqueId).get();
		//marque.getModeles().add(modele);
		//marqueTelRepository.save(marque);
		modele.setMarque(marque);
		modelTelRepository.save(modele);
		
		return modele;
		
	}
	
	@PutMapping("/modeles/{modeleId}")
	public ModeleTel updateModele (@PathVariable long modeleId,@RequestBody ModeleTel modeletel ) {
		ModeleTel newModele = modelTelRepository.findById(modeleId).get();
		newModele.setModele(modeletel.getModele());
		newModele.setDescription(modeletel.getDescription());
		newModele.setPrix(modeletel.getPrix());
		
		return modelTelRepository.save(newModele);
		
	}
	@DeleteMapping("/modeles/{modeleId}")
	public void deleteModele(@PathVariable long modeleId) {
		modelTelRepository.deleteById(modeleId);
	}
	
}
