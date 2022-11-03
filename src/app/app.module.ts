import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@abgov/web-components';
import { AngularComponentsModule } from '@abgov/angular-components';

import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { InfoFormComponent } from './info-form/info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkExperienceComponent,
    InfoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
