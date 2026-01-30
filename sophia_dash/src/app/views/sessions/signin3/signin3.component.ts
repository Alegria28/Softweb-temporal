import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { sophiaAnimations } from 'app/shared/animations/sophia-animations';

@Component({
  selector: 'app-signin3',
  templateUrl: './signin3.component.html',
  styleUrls: ['./signin3.component.scss'],
  animations: sophiaAnimations
})
export class Signin3Component implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.signupForm = this.fb.group(
      {
        email: ["",[Validators.required,Validators.email]],
        password: password,
        agreed: [false,Validators.required]
      }
    );
  }

  onSubmit() {
    if (!this.signupForm.invalid) {
      // do what you wnat with your data
      console.log(this.signupForm.value);
    }
  }

}
