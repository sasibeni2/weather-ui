import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitysComponent } from '../weather/components/citys/citys.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: CitysComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
