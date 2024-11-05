import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedIn = false;
  @Output() loginToggle = new EventEmitter<void>();
  toggleLoginLogout() {
    if (this.loggedIn) {
      // Perform logout actions
      this.loggedIn = false;
      alert("You have been logged out.");
    } else {
      // Trigger the login modal or sidebar open action
      this.openLoginSidebar();
    }
  }

  openLoginSidebar() {
    // Logic to open the login sidebar component
    this.loginToggle.emit();
  }

  onUserLoggedIn() {
    this.loggedIn = true;
  }



  // toggleLogin() {
  //   // Emit the event to notify the parent component
  //   this.loginToggle.emit();
  // }
}
