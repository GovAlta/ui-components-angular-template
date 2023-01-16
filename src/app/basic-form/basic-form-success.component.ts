import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-form-success',
  templateUrl: './basic-form-success.component.html',
  styleUrls: ['./basic-form.component.css'],
})

export class BasicFormSuccessComponent {
    constructor(private router: Router) { }
    onClick() {
        this.router.navigate(['/home']);
      }
}