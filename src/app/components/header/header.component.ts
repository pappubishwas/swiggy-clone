import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedIn = false;
  userName = 'Sign In'; // Default to "Sign In"
  @Output() loginToggle = new EventEmitter<void>(); // Output event to toggle login sidebar
  @ViewChild('popup') popup!: PopupComponent;

  constructor(private authService: AuthService) {}

  displayMessage(message: string) {
    this.popup.show(message);
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.loggedIn = status;

      // Update userName if logged in
      if (status) {
        const userDetails = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
        console.log(userDetails);
        this.userName = userDetails.name || 'User';
      } else {
        this.userName = 'Sign In';
      }
    });
  }

  toggleLoginLogout() {
    if (this.loggedIn) {
      // Log out the user
      localStorage.removeItem('loggedInUser');
      this.authService.setLoggedIn(false); // Set AuthService status to logged out
      this.displayMessage("You have been logged out.");
    } else {
      // Trigger login sidebar
      this.openLoginSidebar();
    }
  }

  openLoginSidebar() {
    this.loginToggle.emit(); // Emit event to open the login sidebar
  }

  onUserLoggedIn() {
    this.loggedIn = true; // Set logged in to true when the user logs in
  }
}
