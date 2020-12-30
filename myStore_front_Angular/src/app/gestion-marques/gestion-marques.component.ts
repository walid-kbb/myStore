import { Component, OnInit } from '@angular/core';
import {MarqueTel} from 'app/MarqueTel'
import {MyStoreService} from '../services/my-store.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-marques',
  templateUrl: './gestion-marques.component.html',
  styleUrls: ['./gestion-marques.component.scss']
})
export class GestionMarquesComponent implements OnInit {
  marques : MarqueTel[];
  constructor(private myStoreService : MyStoreService, private router:Router) { }

  ngOnInit() {
    this.myStoreService.getMarquesList().subscribe(
      
      data => {
        console.log(data);

        this.marques=data;
        
  
      },
    err=>{ console.log(err);})
  }

   addMarque(){
    this.router.navigate(['/add-marque'])
   
  }
 
  updateMarque(id:number, marque:string){
    this.router.navigate(['/update-marque'],{ state: { marqueId: id, marque :marque} })
  }

  deleteMarque(id:number){
    console.log(id);
    this.myStoreService.deleteMarque(id).subscribe(
      data => { console.log(data);  },
      error => console.log(error));
      window.location.reload();
  }
  


}
