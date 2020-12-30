import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModeleTel} from '../ModeleTel';
import {MyStoreService} from '../services/my-store.service';
import {MarqueTel} from '../MarqueTel';
@Component({
  selector: 'app-add-modele',
  templateUrl: './add-modele.component.html',
  styleUrls: ['./add-modele.component.scss']
})
export class AddModeleComponent implements OnInit {
  modele : ModeleTel = new ModeleTel();
  submitted = false;
  marques:MarqueTel[];
  marqueId:number;
  constructor(private myStoreService : MyStoreService, private router:Router) { }

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
    this.myStoreService.saveModele(this.modele,this.marqueId)
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
