import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {AuthentificationComponent} from './authentification/authentification.component'
const routes: Routes =[
    
  { path : 'auth' , component:AuthentificationComponent},
    {path: '',redirectTo: 'auth', pathMatch: 'full'},
    {path: '',component: AdminLayoutComponent,children: [{path: '',loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
