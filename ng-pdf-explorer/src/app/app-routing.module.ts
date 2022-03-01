import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGuidanceComponent } from './add-guidance/add-guidance.component';
import { ViewGuidanceComponent } from './view-guidance/view-guidance.component';

const routes: Routes = [
  { path: '', component: ViewGuidanceComponent },  
  { path: 'add-guidance', component: AddGuidanceComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
