import { Component, OnInit } from '@angular/core';
import {ModeleTel} from 'app/ModeleTel'
import {MyStoreService} from '../services/my-store.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-mobiles',
  templateUrl: './gestion-mobiles.component.html',
  styleUrls: ['./gestion-mobiles.component.scss']
})
export class GestionMobilesComponent implements OnInit {
  modeles : ModeleTel[];

  constructor(private myStoreService : MyStoreService, private router:Router) { }


  ngOnInit() {
    this.myStoreService.getPhonesList().subscribe(
      
      data => {
        console.log(data);

        this.modeles=data;
        console.log(this.modeles[0].marqueName);
  
      },
    err=>{ console.log(err);})
  }

  addModele(){
    this.router.navigate(['/add-modele'])
   
  }
 
  updateModele(id:number, modele:string,description:string,prix:number){
    this.router.navigate(['/update-modele'],{ state: { modeleId: id, modele :modele,description :description,prix:prix } })
  }

  deleteModele(id:number){
    console.log(id);
    this.myStoreService.deleteModele(id).subscribe(
      data => { console.log(data);  },
      error => console.log(error));
      window.location.reload();
  }
  



}
