import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class AuthService {
  private readonly localStorageKey = 'currentUser';

  constructor() { }

  login(username: string, password: string): boolean {
    // Ejemplo simple de verificación de usuario (debería realizarse en el backend)
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(this.localStorageKey, JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.localStorageKey) !== null;
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
  }
}
