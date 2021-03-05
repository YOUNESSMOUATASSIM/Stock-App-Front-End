import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Fournisseur } from './fournisseur';
import { FrournisseurService } from './frournisseur.service';
import { Produit } from './produit';
import { ProduitService } from './produit.service';
import { Responsable } from './responsable';
import { ResponsableService } from './responsable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  
  public produits: Produit[] = [];
  public responsables:Responsable[]=[];
  public fournisseurs:Fournisseur[]=[];

  constructor(
    private produitService :ProduitService,
    private responsableService:ResponsableService,
    private fournisseurService :FrournisseurService
    ){}

  ngOnInit(){
  // OK!  this.getProduits();
  // OK! this.getResponsables();
    this.getFournisseurs();
  }

  public getProduits(): void{

    this.produitService.getProduits().subscribe(
     (response : Produit[])=>{ 
       this.produits=response;
      
     },
     (error : HttpErrorResponse)=>{
       alert(error.message);
     }
    );
  }

  public getResponsables(): void{

    this.responsableService.getResponsables().subscribe(
     (response : Responsable[])=>{ 
       this.responsables=response;
      
     },
     (error : HttpErrorResponse)=>{
       alert(error.message);
     }
    );
  }

  public getFournisseurs(): void{

    this.fournisseurService.getFournisseurs().subscribe(
     (response : Fournisseur[])=>{ 
       this.fournisseurs=response;
      
     },
     (error : HttpErrorResponse)=>{
       alert(error.message);
     }
    );
  }
}
