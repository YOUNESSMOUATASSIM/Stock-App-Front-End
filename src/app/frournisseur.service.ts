import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fournisseur } from './fournisseur';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrournisseurService {
private apiServerUrl =environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getFournisseurs():Observable<Fournisseur[]>{
    return this.http.get<Fournisseur[]>(`${this.apiServerUrl}/Fournisseurs/all`);

  }

  public addFournisseur(fournisseur : Fournisseur):Observable<Fournisseur>{
    return this.http.post<Fournisseur>(`${this.apiServerUrl}/Fournisseurs/ajouter`,fournisseur);

  }

  
  public updateFournisseur(fournisseur : Fournisseur):Observable<Fournisseur>{
    return this.http.put<Fournisseur>(`${this.apiServerUrl}/Fournisseurs/modifier/${fournisseur.idFournisseur}`,fournisseur);

  }

  
  public deleteFournisseur(fournisseurId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Fournisseurs/supprimer/${fournisseurId}`);

  }
}
