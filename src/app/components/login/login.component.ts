import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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


  constructor(private http: HttpClient, private authService: AuthService) {}

  login() {
    if (!this.phone) {
      alert('Please enter a phone number');
      return;
    }
  
    this.http.get(`${this.mockApiUrl}?phone=${this.phone}`).subscribe({
      next: (response: any) => {
        console.log(response);
        // Check if user exists and phone number matches
        if (response.length && response[0].phone === this.phone) {
          if (this.isExistingUser && this.password) {
            alert('Logging in...');
            this.authService.setLoggedIn(true); // Set logged in status
            this.closeLogin();
            this.clearForm();
          } else {
            // Prompt user for password if it’s not yet provided
            this.isExistingUser = true;
          }
        } else {
          // If user is not found, trigger registration view
          alert('User does not exist. Redirecting to registration...');
          this.showRegister = true;
        }
      },
      error: (error) => {
        // Handle error case, e.g., 404 or other server errors
        console.error('Error fetching user:', error.error);
        if(error.error==="Not found"){

          alert('User does not exist. Redirecting to registration....');
          this.showRegister = true; 
        }
        else{
          alert('Server error. Please try later....');
      }
      }
    });
  }
  

  createUser() {
    if (!this.phone || !this.name || !this.email || !this.password) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Make a GET request to fetch users
    this.http.get(this.mockApiUrl).subscribe({
      next: (response: any) => {
        console.log(response);
        // Filter for users matching the provided phone number
        const matchingUsers = response.filter((user: any) => user.phone === this.phone);
  
        if (matchingUsers.length > 0) {
          alert('Phone number already registered.');
        } else {
          // Proceed to create a new user
          this.registerUser();
        }
      },
      error: (error) => {
        // Handle error cases
        console.error('Error fetching user:', error);
        if (error.status === 404) {
          // If not found, proceed to register user
          this.registerUser();
        } else {
          alert('Server error. Please try later...');
        }
      }
    });
  }
  
  private registerUser() {
    const newUser = { phone: this.phone, name: this.name, email: this.email, password: this.password };
    this.http.post(this.mockApiUrl, newUser).subscribe(() => {
      alert('Account created successfully!');
      this.authService.setLoggedIn(true); 
      this.closeLogin();
      this.clearForm();
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
