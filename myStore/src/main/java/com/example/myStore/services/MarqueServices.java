package com.example.myStore.services;

import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myStore.dao.MarqueTelRepository;
import com.example.myStore.entities.MarqueTel;
@CrossOrigin(origins = "*")
@RestController
public class MarqueServices {
	
	@Autowired
	MarqueTelRepository marqueTelRepository;
	
		@GetMapping("/marques")
		public List<MarqueTel> getMarques(){
			
			return marqueTelRepository.findAll();
			
			
		}
	
		@PostMapping("/addMarque")
		public void addMarque (@RequestBody MarqueTel marque) {
			
			MarqueTel newMarque =  new MarqueTel(marque.getMarque(), null);
			System.out.println(newMarque);
			marqueTelRepository.save(newMarque);
		}
		
		@PutMapping("/updateMarque/{id}")
		public void updateMarque (@PathVariable long id ,@RequestBody MarqueTel marque) {
			MarqueTel updatedMarque =marqueTelRepository.findById(id).get();
			updatedMarque.setMarque(marque.getMarque());
			marqueTelRepository.save(updatedMarque);
		}
		
		@DeleteMapping("/deleteMarque/{id}")
		public void deleteMarque (@PathVariable("id") long id) {
			
			marqueTelRepository.deleteById(id);
		}
	
	
}
