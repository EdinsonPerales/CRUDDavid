import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PreciosRoutingModule } from './precios-routing.module';
import { PrecioLayoutComponent } from './components/precio-layout/precio-layout.component';
import { DataPreciosComponent } from './components/data-precios/data-precios.component';



@NgModule({
  declarations: [
    HomeComponent,
    PrecioLayoutComponent,
    DataPreciosComponent
  ],
  imports: [
    CommonModule,
    PreciosRoutingModule
  ]
})
export class PreciosModule { }
