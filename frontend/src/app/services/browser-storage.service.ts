import { Injectable } from '@angular/core';
import { User } from '@models';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  private _user: User;
  private _token: string;

  set token (token: string) {
    this._token = token;
    window.localStorage.setItem('token', token);
  }

  get token () {
    if (this._token) return this._token;
    this._token = window.localStorage.getItem('token');
    return this._token;
  }

  get userIdentityHash () {
    console.log(this.token)
    return jwtDecode(this.token).id;
  }

  get user () {
    if (this._user) return this._user
    try {
      const stringifiedUser = window.localStorage.getItem('user');
      this._user = JSON.parse(stringifiedUser);
      return this._user;
    } catch (e) {
      console.error(e)
    }
  }

  set user (user: User) {
    try {
      this._user = user;
      const stringifiedUser = JSON.stringify(user);
      window.localStorage.setItem('user', stringifiedUser);
    } catch (e) {
      console.error(e);
    }

  }
}