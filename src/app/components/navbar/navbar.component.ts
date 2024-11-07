import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  redirectToHome() {
    this.router.navigate(['/']);
  }
  redirectToCheckOut() {
    this.router.navigate(['/checkout']);
  }
  redirectToFavourite() {
    this.router.navigate(['/favourites']);
  }
  isLoggedIn = false;
  userName='User'
  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      console.log('Login status:', this.isLoggedIn);
      if (status) {
        const userDetails = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
        console.log(userDetails);
        this.userName = userDetails.name || 'User';
      } else {
        this.userName = 'Sign In';
      }
    });
  }
}
