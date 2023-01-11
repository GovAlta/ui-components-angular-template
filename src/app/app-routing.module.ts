import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { BasicFormComponent } from './basic-form/basic-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
