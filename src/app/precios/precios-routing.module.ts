import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes : Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'**',
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PreciosRoutingModule { }
