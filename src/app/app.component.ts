import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(null),
    });
  }

  submit() {
    console.log('Form submited : ', this.form);
    const formData = this.form.value;

    console.log('Form data ; ', formData);
  }
}
