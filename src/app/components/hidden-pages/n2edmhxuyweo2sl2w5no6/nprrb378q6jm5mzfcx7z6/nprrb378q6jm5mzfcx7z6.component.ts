import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../shared/navbar.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidateAnswerChelsea, ValidateAnswerAmanda } from './validator/name.validator';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nprrb378q6jm5mzfcx7z6',
  templateUrl: './nprrb378q6jm5mzfcx7z6.component.html',
  styleUrls: ['./nprrb378q6jm5mzfcx7z6.component.scss']
})
export class Nprrb378q6jm5mzfcx7z6Component implements OnInit {
  loginFormControlChelsea: FormGroup;
  loginFormControlAmanda: FormGroup;
  loggedIn = false;
  timeElapsed = false;

  showEye: boolean;
  values = "";
  chelseaValdez: boolean;
  amandaWinkle: boolean;

  constructor(private router: Router,
              private authService: AuthService,
              public navbarService: NavbarService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.navbarService.hide();
    this.createFormChelsea();
    this.createFormAmanda();
  }

  createFormChelsea() {
    this.loginFormControlChelsea = this.fb.group({
      secretQuestionChelsea: ['', [Validators.required, ValidateAnswerChelsea]]
    });
  }

  createFormAmanda() {
    this.loginFormControlAmanda = this.fb.group({
      secretQuestionAmanda: ['', [Validators.required, ValidateAnswerAmanda]]
    });
  }

  onKeyName(value: string) {
    this.values += value;
    if (value.toLowerCase() === "chelsea valdez" || value.toLowerCase() === 'chelsea gutierrez valdez') {
      console.log("How are you Jau?")
      this.showEye = true;
      this.chelseaValdez = true;
      this.amandaWinkle = false;
    }
    if (value.toLowerCase() === 'amanda winkle' || value.toLowerCase() === 'amanda marie winkle') {
      this.showEye = true;
      this.amandaWinkle = true;
      this.chelseaValdez = false;
    }
    if (value === "") {
      this.showEye = false;
      this.amandaWinkle = false;
      this.chelseaValdez = false;
    }
  }

  getErrorsChelsea(el) {
    switch (el) {
      case 'secretQuestionChelsea':
        if (this.loginFormControlChelsea.get('secretQuestionChelsea').hasError('validAnswer')) {
          return "That's incorrect."
        }
        break;
    }
  }

  getErrorsAmanda(el) {
    switch (el) {
      case 'secretQuestionAmanda':
        if (this.loginFormControlAmanda.get('secretQuestionAmanda').hasError('validAnswer')) {
          return "That's incorrect."
        }
        break;
    }
  }

  onSubmitChelsea() {
    if (this.loginFormControlChelsea.invalid) {
      return;
    } 
    if (this.authService._chelseaAuthenticated === true) {
      this.authService.logoutAmanda();
    };
    this.authService.loginChelsea();
    this.loggedIn = true;
    setTimeout(() => {
      this.router.navigate(['/home-page'])
    }, 3000);
  }

  onSubmitAmanda() {
    if (this.loginFormControlAmanda.invalid) {
      return;
    }
    if (this.authService._chelseaAuthenticated === true) {
      this.authService.logoutChelsea();
    }
    this.authService.loginAmanda();
    this.loggedIn = true;
    setTimeout(() => {
      this.router.navigate(['/home-page'])
    }, 3000);
  }
}
