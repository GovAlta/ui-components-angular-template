import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onInputChangeEvent(event: any) {
    console.log('onEvent', event.detail);
  }
  submitForm() {
    console.log('handleClick');
  }
}
