import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {}
  // ...
  public isAuthenticated(): boolean {
    const token:any = localStorage.getItem('auth-token');
    // Check whether the token is expired and return
    // true or false
    if(token)
    return !this.jwtHelper.isTokenExpired(token);
    return false;
  }
}