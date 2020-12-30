import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModeleTel} from '../ModeleTel';
import {MyStoreService} from '../services/my-store.service';
import {MarqueTel} from '../MarqueTel';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.scss']
})
export class UpdateMobileComponent implements OnInit {
  modele : ModeleTel = new ModeleTel();
  submitted = false;
  marques:MarqueTel[];
  modeleId:number;
  constructor(private myStoreService : MyStoreService, private router:Router) {
   this.modeleId=this.router.getCurrentNavigation().extras.state.modeleId;
    this.modele.prix=this.router.getCurrentNavigation().extras.state.prix;
    this.modele.description=this.router.getCurrentNavigation().extras.state.description;
    this.modele.modele=this.router.getCurrentNavigation().extras.state.modele;
   }

  ngOnInit() {
    
    this.myStoreService.getMarquesList().subscribe(
      
      data => {
        console.log(data);

        this.marques=data;

  
      },
    err=>{ console.log(err);})
   
  }

  onSubmit() {
    this.submitted = true;
    console.log("this.modele = " +this.modele)
    this.myStoreService.updateModele(this.modele,this.modeleId)
    .subscribe(
      data => console.log("data = " +data),
      error => console.log(error)
    );
  this.modele = new ModeleTel();
  this.router.navigate(['/gestion-modeles'])
    .then(() => {
      window.location.reload();
    });
  }

}
