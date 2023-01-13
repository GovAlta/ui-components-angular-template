import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-form-success',
  templateUrl: './basic-form-success.component.html',
  styleUrls: ['./basic-form.component.css'],
})

export class BasicFormSuccessComponent {
    constructor(private fb: FormBuilder, private location: Location, private router: Router) { }
    onClick() {
        this.router.navigate(['/home']);
      }
}