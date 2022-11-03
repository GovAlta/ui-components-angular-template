import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { InfoFormComponent } from './info-form/info-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'info-form', component: InfoFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
