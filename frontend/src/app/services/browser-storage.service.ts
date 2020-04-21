import { Injectable } from '@angular/core';
import { User } from '@models';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  private _token: string;

  set token (token: string) {
    this._token = token;
    window.localStorage.setItem('token', token);
  }

  get token (): string{
    if (this._token) return this._token;
    this._token = window.localStorage.getItem('token');
    return this._token;
  }

  get username () {
    return jwtDecode(this.token).name;
  }

  get userIdentityHash (): string {
    return jwtDecode(this.token).identityHash;
  }
}