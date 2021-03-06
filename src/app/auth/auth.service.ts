import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isAuthenticated(): boolean {
    return !!window.sessionStorage.getItem('isLogged');
  }
}
