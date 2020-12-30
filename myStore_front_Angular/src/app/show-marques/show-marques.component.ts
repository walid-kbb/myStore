import { Component, OnInit } from '@angular/core';
import { MarqueTel } from 'app/MarqueTel';

import {MyStoreService} from '../services/my-store.service'

@Component({
  selector: 'app-show-marques',
  templateUrl: './show-marques.component.html',
  styleUrls: ['./show-marques.component.scss']
})
export class ShowMarquesComponent implements OnInit {
  marques : MarqueTel[];

  constructor(private myStoreService :MyStoreService ) { }

  ngOnInit() {

    this.myStoreService.getMarquesList().subscribe(
      
      data => {
        console.log(data);

        this.marques=data;

  
      },
    err=>{ console.log(err);})

  }

  

}
