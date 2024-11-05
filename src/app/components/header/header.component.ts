import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Corrected to styleUrls
})
export class HeaderComponent {
  loggedIn = false;

  @Output() loginToggle = new EventEmitter<void>(); // Defined loginToggle output

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.loggedIn = status;
    });
  }

  toggleLoginLogout() {
    if (this.loggedIn) {
      this.authService.setLoggedIn(false); // Set to logged out
      alert("You have been logged out.");
    } else {
      this.openLoginSidebar();
    }
  }

  openLoginSidebar() {
    this.loginToggle.emit(); // Emit event to open the login sidebar
  }

  onUserLoggedIn() {
    this.loggedIn = true;
  }
}
