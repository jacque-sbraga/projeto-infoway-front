import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const AVATAR_URL = 'avatar';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));    
  }

  public saveUserAvatar (avatar: string) {

    console.log('service' + avatar);

    window.sessionStorage.setItem(AVATAR_URL, avatar);
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY) || '');
  }
}
