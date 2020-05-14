import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _chelseaAuthenticated = false;
  public _amandaAuthenticated = false;
  public _userLoggedIn = false;

  get chelseaIsAuthenticated() {
    return this._chelseaAuthenticated;
  }

  get amandaIsAuthenticated() {
    return this._amandaAuthenticated;
  }

  logoutAmanda() {
    this._amandaAuthenticated = false;
  }

  logoutChelsea() {
    this._chelseaAuthenticated = false;
  }


  constructor() { }

  loginChelsea() {
    return this._chelseaAuthenticated = true;
  }

  loginAmanda() {
    return this._amandaAuthenticated = true;
  }

}
