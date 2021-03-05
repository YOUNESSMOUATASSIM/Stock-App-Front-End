import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Responsable } from './responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  private apiServerUrl =environment.apiBaseUrl;
 
  constructor(private http:HttpClient) { }

  public getResponsables():Observable<Responsable[]>{
    return this.http.get<Responsable[]>(`${this.apiServerUrl}/Responsables/all`);

  }

  public addResponsable(responsable : Responsable):Observable<Responsable>{
    return this.http.post<Responsable>(`${this.apiServerUrl}/Responsables/ajouter`,responsable);

  }

  
  public updateResponsable(responsable : Responsable):Observable<Responsable>{
    return this.http.put<Responsable>(`${this.apiServerUrl}/Responsables/modifier/${responsable.idUser}`,responsable);

  }

  
  public deleteResponsable(responsableId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Responsables/supprimer/${responsableId}`);

  }
}
