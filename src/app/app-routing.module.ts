import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MDetailsComponent} from './m-details/m-details.component'
const routes: Routes = [
  {
    path:'details/:id',
    component:MDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
