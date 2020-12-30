import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Admin} from '../Admin';
import {MyStoreService} from '../services/my-store.service';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  password :string;
  password2 :string;
  hashedPasword: string;
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
    
    if ( this.password==this.password2){
     
      this.myStoreService.updateAdminPassword(this.password)
      .subscribe(
        data => console.log("data = " +data),
      error => console.log(error)

      );
       alert("Mot de passe modifié avec succes");
       this.router.navigate(['/gestion-modeles'])
    }else{
      alert("les 2 mots de passe ne se correspondent pas");
    }
  

}

}
