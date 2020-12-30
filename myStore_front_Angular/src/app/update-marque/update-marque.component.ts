import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MyStoreService} from '../services/my-store.service';
import {MarqueTel} from '../MarqueTel';
@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styleUrls: ['./update-marque.component.scss']
})
export class UpdateMarqueComponent implements OnInit {
  submitted = false;
  marque:MarqueTel=new MarqueTel();
  marqueId:number;
  constructor(private myStoreService : MyStoreService, private router:Router) {
    this.marqueId=this.router.getCurrentNavigation().extras.state.marqueId;
     this.marque.marque=this.router.getCurrentNavigation().extras.state.marque;
    
    }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log("this.marque = " +this.marque)
    this.myStoreService.updateMarque(this.marque,this.marqueId)
    .subscribe(
      data => console.log("data = " +data),
      error => console.log(error)
    );
  this.marque = new MarqueTel();
  this.router.navigate(['/gestion-marques'])
    .then(() => {
      window.location.reload();
    });
  }

}
