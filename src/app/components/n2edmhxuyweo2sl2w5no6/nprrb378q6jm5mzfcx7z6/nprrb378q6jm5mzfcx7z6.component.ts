import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared/navbar.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidateAnswerChelsea, ValidateAnswerAmanda } from './validator/name.validator';

@Component({
  selector: 'app-nprrb378q6jm5mzfcx7z6',
  templateUrl: './nprrb378q6jm5mzfcx7z6.component.html',
  styleUrls: ['./nprrb378q6jm5mzfcx7z6.component.scss']
})
export class Nprrb378q6jm5mzfcx7z6Component implements OnInit {
  loginFormControlChelsea: FormGroup;
  loginFormControlAmanda: FormGroup;

  showEye: boolean;
  values = "";
  chelseaValdez: boolean;
  amandaWinkle: boolean;

  constructor(public navbarService: NavbarService,
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
    if (this.values.includes('Chelsea Valdez')) {
      this.showEye = true;
      this.chelseaValdez = true;
      this.amandaWinkle = false;
    }
    if (this.values.includes('Amanda Winkle')) {
      this.showEye = true;
      this.amandaWinkle = true;
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
  }

  onSubmitAmanda() {
    if (this.loginFormControlAmanda.invalid) {
      return;
    }
  }
}
