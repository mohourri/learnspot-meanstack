import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() { 
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.isLoggedIn$.next(true);
    }
  }

  public get isLoggedIn(): boolean {
    return this.isLoggedIn$.value;
  }

  public set isLoggedIn(value: boolean) {
    this.isLoggedIn$.next(value);
  }

}
