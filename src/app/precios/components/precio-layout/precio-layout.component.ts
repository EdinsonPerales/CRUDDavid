import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precio-layout',
  templateUrl: './precio-layout.component.html',
  styles: [
  ]
})
export class PrecioLayoutComponent implements OnInit {

  constructor() { }

  title    : string  = 'Gestionar precios';
  backBtn  : boolean = true;
  trashBtn : boolean = true;
  addBtn   : boolean = true;
  filter   : boolean = true;
  //state    : string = 'main'; //['main','recovery','add','update']
  
  ngOnInit(): void {
  }

  backAction(){
    if (this.title == 'Gestionar precios') {
      //return page function
    }else{
      this.title = 'Recuperar precios';
      this.backBtn   = true;
      this.trashBtn  = true;
      this.addBtn    = true;
      this.filter = true;
    }    
  }

  recoveryAction(){
    this.title = 'Recuperar precios';
    this.backBtn   = true;
    this.trashBtn  = false;
    this.addBtn    = false;
    this.filter = false;
  }

  addAction(){
    this.title = 'Agregar precio';
    this.backBtn   = true;
    this.trashBtn  = false;
    this.addBtn    = false;
    this.filter = false;
  }

  updateAction(){
    this.title = 'Actualizar precio';
    this.backBtn   = true;
    this.trashBtn  = false;
    this.addBtn    = false;
    this.filter = false;
  }
}
