import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent {

  profileForm = this.fb.group({
    userRole : [''],
    startDate : [''],
    endDate : [''],
    isCurrentlyEmployed  : [''],
    numberOfMonths : [''],
    numberOfHours : [''],
    descriptionOfWork : ['']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  /*

  favoriteColor1 = '';
  favoriteColor2 = '';

  onSubmit() {
    console.warn( console.log(this.favoriteColor1) );
    console.warn( console.log(this.favoriteColor2) );
  }
  */
}
