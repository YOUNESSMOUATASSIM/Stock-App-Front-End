import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
private apiServerUrl =environment.apiBaseUrl;
 
  constructor(private http:HttpClient) { }


  public getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.apiServerUrl}/Produits/all`);

  }

  public addProduit(produit : Produit):Observable<Produit>{
    return this.http.post<Produit>(`${this.apiServerUrl}/Produits/ajouter`,produit);

  }

  
  public updateProduit(produit : Produit):Observable<Produit>{
    return this.http.put<Produit>(`${this.apiServerUrl}/Produits/modifier/${produit.idProduit}`,produit);

  }

  
  public deleteProduit(produitId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Produits/supprimer/${produitId}`);

  }
}
