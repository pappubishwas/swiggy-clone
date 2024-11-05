import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  login(username: string, password: string) {
    return axios.post('https://mockapi.io/login', { username, password });
  }

  register(userData: any) {
    return axios.post('https://mockapi.io/users', userData);
  }
}
