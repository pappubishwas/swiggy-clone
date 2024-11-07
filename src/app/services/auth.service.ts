import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.checkInitialLoginState());
  isLoggedIn$ = this.loggedIn.asObservable();

  setLoggedIn(status: boolean) {
    this.loggedIn.next(status);
  }

  private checkInitialLoginState(): boolean {
    const userDetails = localStorage.getItem('loggedInUser');
    return !!userDetails;
  }
}
