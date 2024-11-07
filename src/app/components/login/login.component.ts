// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { PopupComponent } from '../popup/popup.component';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, FormsModule, HttpClientModule,PopupComponent],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   @Input() isOpen: boolean = false;
//   @Output() close = new EventEmitter<void>();
//   @Output() userLoggedIn = new EventEmitter<void>();
//   @ViewChild('popup') popup!:PopupComponent;

//   showRegister: boolean = false;
//   isExistingUser: boolean = false;
//   loggedIn: boolean = false;

//   phone: string = '';
//   name: string = '';
//   email: string = '';
//   password: string = '';

//   mockApiUrl = 'https://671678883fcb11b265d28ea7.mockapi.io/users';


//   constructor(private http: HttpClient, private authService: AuthService) {}


//   toggleLogin() {
//     this.isOpen = !this.isOpen;
//   }

//   closeLogin() {
//     this.isOpen = false;
//     this.close.emit();
//   }

//   toggleRegister() {
//     this.showRegister = !this.showRegister;
//     this.clearForm();
//   }


//   displayMessage(message:string){
//     this.popup.show(message);
//   }


//   login() {
//     if (!this.phone) {
//       this.displayMessage('Please enter a phone number');
//       return;
//     }
  
//     this.http.get(`${this.mockApiUrl}?phone=${this.phone}`).subscribe({
//       next: (response: any) => {
//         console.log(response);
        
//         // Check if the response has at least one user with the matching phone
//         if (response.length && response[0].phone === this.phone) {
//           const fetchedUser = response[0]; // Get the user data
//           console.log("Fetched password:", fetchedUser.password);
//           if (this.isExistingUser && this.password) {
//             console.log("Entered password:", this.password);
  
//             // Compare entered password with fetched password
//             if (this.password === fetchedUser.password) {

//               this.displayMessage('Logging in...');
//               this.authService.setLoggedIn(true); // Set logged in status
//               this.closeLogin();
//               this.clearForm();
//               fetchedUser.isExistingUser = true;
//               localStorage.setItem('loggedInUser', JSON.stringify(fetchedUser));
//             } else {
//               this.displayMessage('Wrong password!');
//             }
//           } else {
//             // If the user exists but password isn't provided, prompt for it
//             this.isExistingUser = true;
//           }
//         } else {
//           // If user is not found, trigger registration view
//           this.displayMessage('User does not exist. Redirecting to registration...');
//           this.showRegister = true;
//         }
//       },
//       error: (error) => {
//         // Handle error case, e.g., 404 or other server errors
//         console.error('Error fetching user:', error.error);
//         if (error.error === 'Not found') {
//           this.displayMessage('User does not exist. Redirecting to registration...');
//           this.showRegister = true;
//         } else {
//           this.displayMessage('Server error. Please try later...');
//         }
//       }
//     });
//   }
  
  

//   createUser() {
//     if (!this.phone || !this.name || !this.email || !this.password) {
//       this.displayMessage('Please fill out all fields.');
//       return;
//     }
  
//     // Make a GET request to fetch users
//     this.http.get(this.mockApiUrl).subscribe({
//       next: (response: any) => {
//         console.log(response);
//         // Filter for users matching the provided phone number
//         const matchingUsers = response.filter((user: any) => user.phone === this.phone);
  
//         if (matchingUsers.length > 0) {
//           this.displayMessage('Phone number already registered.');
//         } else {
//           // Proceed to create a new user
//           this.registerUser();
//         }
//       },
//       error: (error) => {
//         // Handle error cases
//         console.error('Error fetching user:', error);
//         if (error.status === 404) {
//           // If not found, proceed to register user
//           this.registerUser();
//         } else {
//           this.displayMessage('Server error. Please try later...');
//         }
//       }
//     });
//   }
  
//   private registerUser() {
//     const newUser = { phone: this.phone, name: this.name, email: this.email, password: this.password };
//     this.http.post(this.mockApiUrl, newUser).subscribe(() => {
//       this.displayMessage('Account created successfully!');
//       this.authService.setLoggedIn(true); 
//       this.closeLogin();
//       this.clearForm();
//     });
//   }
  
  
  

//   private clearForm() {
//     this.phone = '';
//     this.name = '';
//     this.email = '';
//     this.password = '';
//     this.isExistingUser = false;
//   }



//   userDetails = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
//   this.isExistingUser=userDetails.isExistingUser;
// }




import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, ViewChild, OnInit,ChangeDetectorRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, PopupComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() userLoggedIn = new EventEmitter<void>();
  @ViewChild('popup') popup!: PopupComponent;

  showRegister: boolean = false;
  isExistingUser: boolean = false;
  loggedIn: boolean = false;

  phone: string = '';
  name: string = '';
  email: string = '';
  password: string = '';

  mockApiUrl = 'https://671678883fcb11b265d28ea7.mockapi.io/users';

  constructor(private http: HttpClient, private authService: AuthService,private cdr:ChangeDetectorRef) {}

  ngOnInit() {
    // Check if a user is already logged in from localStorage
    const userDetails = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    
    this.loggedIn = !!userDetails.isExistingUser; // Convert to boolean
    console.log(this.isExistingUser);
  }

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

  displayMessage(message: string) {
    this.popup.show(message);
  }

  login() {
    if (!this.phone) {
      this.displayMessage('Please enter a phone number');
      return;
    }

    this.http.get(`${this.mockApiUrl}?phone=${this.phone}`).subscribe({
      next: (response: any) => {
        if (response.length && response[0].phone === this.phone) {
          const fetchedUser = response[0];
          
          if (this.isExistingUser && this.password) {
            if (this.password === fetchedUser.password) {
              this.displayMessage('Logging in...');
              this.closeLogin();
              this.clearForm();
              
              // Set login state

              // Save user information to localStorage
              fetchedUser.isExistingUser = true;
              localStorage.setItem('loggedInUser', JSON.stringify(fetchedUser));

              this.authService.setLoggedIn(true);
              
            } else {
              this.displayMessage('Wrong password!');
            }
          } else {
            this.isExistingUser = true;
          }
        } else {
          this.displayMessage('User does not exist. Redirecting to registration...');
          this.showRegister = true;
        }
      },
      error: (error) => {
        console.error('Error fetching user:', error.error);
        this.displayMessage('Server error. Please try later...');
      }
    });
  }

  createUser() {
    if (!this.phone || !this.name || !this.email || !this.password) {
      this.displayMessage('Please fill out all fields.');
      return;
    }

    this.http.get(this.mockApiUrl).subscribe({
      next: (response: any) => {
        const matchingUsers = response.filter((user: any) => user.phone === this.phone);

        if (matchingUsers.length > 0) {
          this.displayMessage('Phone number already registered.');
        } else {
          this.registerUser();
        }
      },
      error: (error) => {
        console.error('Error fetching user:', error);
        if (error.status === 404) {
          this.registerUser();
        } else {
          this.displayMessage('Server error. Please try later...');
        }
      }
    });
  }

  private registerUser() {
    const newUser = { phone: this.phone, name: this.name, email: this.email, password: this.password };
    this.http.post(this.mockApiUrl, newUser).subscribe(() => {
      this.displayMessage('Account created successfully!');
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
