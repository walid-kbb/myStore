import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MarqueTel} from '../MarqueTel';
import { ModeleTel } from '../ModeleTel';
import { Admin } from 'app/Admin';

@Injectable({
  providedIn: 'root'
})
export class MyStoreService {

  //admin
  private url_admin = "http://localhost:8080/admin";
  //marques
  private url_get_brands = "http://localhost:8080/marques";
  private url_add_marque = "http://localhost:8080/addMarque";
  // modeles
  private url_get_phones = "http://localhost:8080/modeles";
  private url_add_modele = "http://localhost:8080/marques/";
  private url_delete_modele = "http://localhost:8080/modeles/";
  private url_update_modele = "http://localhost:8080/modeles/";
  private url_update_marque = "http://localhost:8080/updateMarque/";
  private url_delete_marque ="http://localhost:8080/deleteMarque/";
  private url_find_modele ="http://localhost:8080/findmodeles/";
  private url_findLike_modele ="http://localhost:8080/findlikemodeles/";

  constructor(private http: HttpClient) { }

    // admin

    getAdmin(): Observable<Admin>{
      return this.http.get<Admin>(this.url_admin);
    }

    updateAdminPassword(admin : string): Observable<string>{
      return this.http.put<string>(this.url_admin,admin);
    }

    // Marques

    getMarquesList(): Observable<MarqueTel[]> {
      return this.http.get<MarqueTel[]>(this.url_get_brands);
    }

    saveMarque(marque: MarqueTel): Observable<MarqueTel> {
      return this.http.post<MarqueTel>(this.url_add_marque, marque);
    }

    updateMarque(marque: MarqueTel,id:number): Observable<MarqueTel> {
      return this.http.put<MarqueTel>(this.url_update_marque + id, marque);
    }

    deleteMarque(id: number): Observable<string> {
      return this.http.delete<string>(this.url_delete_marque + id);
    }

    // modeles

    getPhonesList(): Observable<ModeleTel[]> {
      return this.http.get<ModeleTel[]>(this.url_get_phones);
    }

    saveModele(modele: ModeleTel,id:number): Observable<ModeleTel> {
      return this.http.post<ModeleTel>(this.url_add_modele + id, modele);
    }

    updateModele(modele: ModeleTel,id:number): Observable<ModeleTel> {
      return this.http.put<ModeleTel>(this.url_update_modele + id, modele);
    }

    deleteModele(id: number): Observable<string> {
      return this.http.delete<string>(this.url_delete_modele + id);
    }

    findByName(nom: string): Observable<ModeleTel[]> {
      console.log(this.url_find_modele + nom);
      return this.http.get<ModeleTel[]>(this.url_find_modele+nom);
    }
  
    findByName_like(nom: string): Observable<ModeleTel[]> {
      return this.http.get<ModeleTel[]>(this.url_findLike_modele+nom);
    }

  
}
