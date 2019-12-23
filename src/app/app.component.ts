import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
          Validators.email,
          Validators.required,
          MyValidators.restrictedEmails
        ]
      ),
      password: new FormControl(null, [
          Validators.required, Validators.minLength(6)
        ]
      ),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('Moskow', Validators.required)
      }),
      skills: new FormArray([]),
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submited : ', this.form);
      const formData = this.form.value;
      console.log('Form data ; ', formData);
    }
  }

  setCapital() {
    const cityMap = {
      ru: 'Moskow',
      ua: 'Kiev',
      by: 'Minsk'
    };
    const cityKey = this.form.get('address').get('country').value;
    this.form.patchValue({
        address: {
          city: cityMap[cityKey]
        }
      }
    );
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    //(<FormArray> this.form.get('skills')).push(control);
    (this.form.get('skills') as FormArray).push(control);
  }
}
