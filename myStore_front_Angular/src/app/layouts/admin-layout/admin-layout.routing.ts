import { Routes } from '@angular/router';
import { ShowMobilesComponent } from 'app/show-mobiles/show-mobiles.component';
import {ShowMarquesComponent} from 'app/show-marques/show-marques.component';
import {AddMarqueComponent} from 'app/add-marque/add-marque.component';
import {AddModeleComponent} from 'app/add-modele/add-modele.component';
import {GestionMobilesComponent} from 'app/gestion-mobiles/gestion-mobiles.component';
import {UpdateMobileComponent} from 'app/update-mobile/update-mobile.component';
import {UpdateMarqueComponent} from 'app/update-marque/update-marque.component';
import {GestionMarquesComponent} from 'app/gestion-marques/gestion-marques.component';
import{FindModelesComponent} from 'app/find-modeles/find-modeles.component';
import {AuthentificationComponent} from 'app/authentification/authentification.component';
import {UpdatePasswordComponent} from 'app/update-password/update-password.component';

export const AdminLayoutRoutes: Routes = [

    { path : 'all-mobiles', component:ShowMobilesComponent},
    { path : 'all-marques', component:ShowMarquesComponent},
    { path : 'add-marque', component:AddMarqueComponent},
    { path : 'add-modele', component:AddModeleComponent},
    { path : 'gestion-modeles', component:GestionMobilesComponent},
    { path : 'find-modeles', component : FindModelesComponent},
    { path : 'update-modele', component:UpdateMobileComponent},
    { path : 'update-marque', component:UpdateMarqueComponent},
    { path : 'gestion-marques', component:GestionMarquesComponent},
    { path : 'change-pwd' , component:UpdatePasswordComponent},
    
    
];
