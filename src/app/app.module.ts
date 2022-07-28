import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@abgov/web-components';
import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { InfoFormComponent } from './info-form/info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkExperienceComponent,
    InfoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
