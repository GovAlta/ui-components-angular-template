import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicFormSuccessComponent } from './basic-form/basic-form-success.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'basic-form-success', component: BasicFormSuccessComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
