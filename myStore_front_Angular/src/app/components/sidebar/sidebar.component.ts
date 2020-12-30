import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
  { path: '/all-marques', title: 'Toutes les marques',  icon:'content_paste', class: '' },
  { path: '/all-mobiles', title: 'Tout les téléphones',  icon:'content_paste', class: '' },
  { path: '/gestion-marques', title: ' Gestion marques',  icon:'dashboard', class: '' },
  { path: '/gestion-modeles', title: ' Gestion telephones',  icon:'dashboard', class: '' },
  { path: '/find-modeles', title: ' Chercher un modele',  icon:'dashboard', class: '' },
 
 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
