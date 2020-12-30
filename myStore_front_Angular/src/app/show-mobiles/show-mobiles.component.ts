import { Component, OnInit } from '@angular/core';
import {ModeleTel} from 'app/ModeleTel'
import {MyStoreService} from '../services/my-store.service'


@Component({
  selector: 'app-show-mobiles',
  templateUrl: './show-mobiles.component.html',
  styleUrls: ['./show-mobiles.component.scss']
})
export class ShowMobilesComponent implements OnInit {


    modeles : ModeleTel[];

  constructor(private myStoreService : MyStoreService) { }

  ngOnInit() {

    this.myStoreService.getPhonesList().subscribe(
      
      data => {
        console.log(data);

        this.modeles=data;
        console.log(this.modeles[0].marqueName);
  
      },
    err=>{ console.log(err);})
  }
  
}
