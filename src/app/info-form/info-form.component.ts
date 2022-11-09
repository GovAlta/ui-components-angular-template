import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css'],
})
export class InfoFormComponent {
  data = {
    userRole: '',
    startDate: '',
    endDate: '',
    isCurrentlyEmployed: '',
    numberOfMonths: '',
    numberOfHours: '',
    descriptionOfWork: '',
    jobType: '',
  };

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['/home']);
  }

  onSubmit(): void {
    console.log('Form data', this.data);
  }
}
