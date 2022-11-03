import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { format } from "date-fns";

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css'],
})

export class InfoFormComponent {
  userRole: string = "";
  startDate: string = "";
  endDate: string = "";
  isCurrentlyEmployed: string = "";
  numberOfMonths: string = "";
  numberOfHours: string = "";
  descriptionOfWork: string = "";
  jobType:string = "";

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(["/home"]);
  }

  onSubmit(): void {
    console.log(
      this.userRole,
      this.startDate,
      this.endDate,
      this.isCurrentlyEmployed,
      this.numberOfMonths,
      this.numberOfHours,
      this.descriptionOfWork,
      this.jobType
    );
  }
}
