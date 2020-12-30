import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeleTel } from 'app/ModeleTel';
import {MarqueTel} from '../MarqueTel';
import {MyStoreService} from '../services/my-store.service';

@Component({
  selector: 'app-find-modeles',
  templateUrl: './find-modeles.component.html',
  styleUrls: ['./find-modeles.component.scss']
})
export class FindModelesComponent implements OnInit {
  nom : string ;
  modele: ModeleTel;
  modeles: ModeleTel[];
  checked : boolean;
  ckecked =false;
  submitted=false;
  constructor(private myStoreService : MyStoreService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.modeles = new ModeleTel()[0];
  }


  findByName(){
    this.submitted=true;
    if(this.checked==true)
    {
    this.myStoreService.findByName(this.nom).subscribe(
    data => {
      console.log(data);
      this.modeles = data;
    },
    err => {
      console.log(err);
    });

    }
   
    else
    {
    this.myStoreService.findByName_like(this.nom).subscribe(
    data => {
      console.log(data);
      this.modeles = data;
    },
    err => {
      console.log(err);
    });
    }
   

    }
}
