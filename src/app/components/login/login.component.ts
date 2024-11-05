import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() userLoggedIn = new EventEmitter<void>();


  showRegister: boolean = false;
  isExistingUser: boolean = false;
  loggedIn: boolean = false;

  phone: string = '';
  name: string = '';
  email: string = '';
  password: string = '';

  mockApiUrl = 'https://671678883fcb11b265d28ea7.mockapi.io/users';

  constructor(private http: HttpClient) {}

  toggleLogin() {
    this.isOpen = !this.isOpen;
  }

  closeLogin() {
    this.isOpen = false;
    this.close.emit();
  }

  toggleRegister() {
    this.showRegister = !this.showRegister;
    this.clearForm();
  }
  login() {
    if (!this.phone) {
      alert('Please enter a phone number');
      return;
    }

    this.http.get(`${this.mockApiUrl}?phone=${this.phone}`).subscribe((response: any) => {
      if (response.length) {
        if (this.isExistingUser && this.password) {
          alert('Logging in...');
          this.userLoggedIn.emit();
          this.closeLogin();
        } else {
          this.isExistingUser = true;
        }
      } else {
        alert('User does not exist. Redirecting to registration...');
        this.showRegister = true;
      }
    });
  }

  createUser() {
    if (!this.phone || !this.name || !this.email || !this.password) {
      alert('Please fill out all fields.');
      return;
    }

    this.http.get(`${this.mockApiUrl}?phone=${this.phone}`).subscribe((response: any) => {
      if (response.length) {
        alert('Phone number already registered.');
      } else {
        const newUser = { phone: this.phone, name: this.name, email: this.email, password: this.password };
        this.http.post(this.mockApiUrl, newUser).subscribe(() => {
          alert('Account created successfully!');
          this.userLoggedIn.emit();
          this.closeLogin();
        });
      }
    });
  }

  private clearForm() {
    this.phone = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.isExistingUser = false;
  }
}
