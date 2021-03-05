import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getClients():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiServerUrl}/Clients/all`);

  }

  public addClient(client : Client):Observable<Client>{
    return this.http.post<Client>(`${this.apiServerUrl}/Clients/ajouter`,client);

  }

  
  public updateClient(client : Client):Observable<Client>{
    return this.http.put<Client>(`${this.apiServerUrl}/Clients/modifier/${client.idClient}`,client);

  }

  
  public deleteClient(clientId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Clients/supprimer/${clientId}`);

  }
}
