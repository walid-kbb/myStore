import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MarqueTel} from '../MarqueTel';
import {MyStoreService} from '../services/my-store.service';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.scss']
})
export class AddMarqueComponent implements OnInit {
  marque : MarqueTel = new MarqueTel();
  submitted = false;
  constructor(private myStoreService : MyStoreService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log("this.marque = " +this.marque)
    this.myStoreService.saveMarque(this.marque)
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
