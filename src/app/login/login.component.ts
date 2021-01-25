import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formLoginValidation: any = {
    msgForm: false,
    msgPassword: false,
    msgUserName: false,
  }

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
    this.loginForm.valueChanges.pipe(
      tap((response) => {
        console.log(response)
        return response
      })
    ).subscribe()
  }

  ngOnInit(): void {
  }

  submit() {

  }
}
