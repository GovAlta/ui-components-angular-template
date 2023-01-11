import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})

export class BasicFormComponent {
  basicForm = this.fb.group({
    textInput: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(new RegExp(/^\+?[\d-() ]{10,18}$/))]],
    textarea: ['', [Validators.required]],
    moreInput: ['', [Validators.required, Validators.max(200)]],
  });

  constructor(private fb: FormBuilder) { }

  getErrorMessage(name: string): string {
    if (this.basicForm.get(name)?.hasError('required')) {
      return 'Required';
    } else {
      switch (name) {
        case 'email':
          if (this.basicForm.get('email')?.hasError('email')) {
            return 'Invalid email address';
          }
          break;
        case 'phone':
          if (this.basicForm.get('phone')?.hasError('pattern')) {
            return 'Invalid phone number';
          }
          break;
        case 'moreInput':
          if (this.basicForm.get('moreInput')?.hasError('max')) {
            return 'Must be less than 200 characters';
          }
          break;
        default:
          return '';
      }
    }

    return '';
  }

  onSubmit() {
    console.log(this.basicForm.get('phone')?.errors);
  }
}
