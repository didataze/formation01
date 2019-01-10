import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {tap, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?
  redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?
  // Une méthode de connexion
  login(name: string, password: string): Observable<boolean> {
    // Faites votre appel à un service d'authentification...
    let isLoggedIn = (name === 'aze' && password === 'aze') ||
      (name === 'mathieu.guerin' && password === 'G47347') ||
      (name === 'fabrice.nadiras' && password === 'D73632') ||
      (name === 'sebastien.therin' && password === 'A45450') ||
      (name === 'alain.saute' && password === 'A25629') ||
      (name === 'thierry.point' && password === 'C46370');

    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = isLoggedIn)
    );
  }

  // Une méthode de déconnexion
  logout(): void {
    this.isLoggedIn = false;
  }

}
