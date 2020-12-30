import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Admin} from '../Admin';
import {MyStoreService} from '../services/my-store.service';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  
  password :string;
  admin: Admin= new Admin();

  constructor(private myStoreService : MyStoreService, private router:Router) { }

  ngOnInit() {
    this.myStoreService.getAdmin().subscribe(
      data => {
      console.log(data);
      this.admin = data;
    },
    err => {
      console.log(err);}
    );
  }

  onSubmit() {
    

    
      console.log("this.admin.password=",this.admin.password);
      console.log("Md5.hashStr(this.password)",Md5.hashStr(this.password));
      if(this.admin.password==Md5.hashStr(this.password)){
        this.router.navigate(['/gestion-modeles'])
        .then(() => {
          window.location.reload();
        });
      }else {
        alert("Mot de passe incorrecte");
     
      }



  }

}
