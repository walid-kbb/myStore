import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {ShowMobilesComponent} from '../../show-mobiles/show-mobiles.component';
import {ShowMarquesComponent} from '../../show-marques/show-marques.component';
import { AddMarqueComponent } from '../../add-marque/add-marque.component';
import { AddModeleComponent } from '../../add-modele/add-modele.component';
import { GestionMobilesComponent } from '../../gestion-mobiles/gestion-mobiles.component';
import { UpdateMobileComponent } from '../../update-mobile/update-mobile.component';
import { UpdateMarqueComponent } from '../../update-marque/update-marque.component';
import { GestionMarquesComponent } from '../../gestion-marques/gestion-marques.component';
import { FindModelesComponent } from '../../find-modeles/find-modeles.component';
import { AuthentificationComponent } from '../../authentification/authentification.component';
import { UpdatePasswordComponent } from '../../update-password/update-password.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    ShowMobilesComponent,
    ShowMarquesComponent,
    AddMarqueComponent,
    AddModeleComponent,
    GestionMobilesComponent,
    UpdateMobileComponent,
    UpdateMarqueComponent,
    GestionMarquesComponent,
    FindModelesComponent,
    AuthentificationComponent,
    UpdatePasswordComponent
  ]
})

export class AdminLayoutModule {}
