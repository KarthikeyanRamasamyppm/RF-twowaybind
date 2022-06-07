import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  contactform = new FormGroup({
    name: new FormControl(''),
  });
  onSubmit(form) {
    console.log(form.value);
  }
}
