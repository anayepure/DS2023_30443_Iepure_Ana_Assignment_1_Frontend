import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username: new FormControl(),
        password: new FormControl()
      }
    )
  }

}
