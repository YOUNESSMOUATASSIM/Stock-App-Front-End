import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiServerUrl =environment.apiBaseUrl;
  
  constructor(private http:HttpClient) { }

  public getCommandes():Observable<Commande[]>{
    return this.http.get<Commande[]>(`${this.apiServerUrl}/Commandes/all`);

  }

  public addCommande(commande : Commande):Observable<Commande>{
    return this.http.post<Commande>(`${this.apiServerUrl}/Commandes/ajouter`,commande);

  }

  
  public updateCommande(commande : Commande):Observable<Commande>{
    return this.http.put<Commande>(`${this.apiServerUrl}/Commandes/modifier/${commande.idCommande}`,commande);

  }

  
  public deleteCommande(commandeId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Commandes/supprimer/${commandeId}`);

  }
}
