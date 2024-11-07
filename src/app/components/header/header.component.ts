import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PopupComponent } from '../popup/popup.component';
import { MenuSiderbarComponent } from '../menu-siderbar/menu-siderbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PopupComponent, MenuSiderbarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  loggedIn = false;
  userName = 'Sign In';
  @Output() loginToggle = new EventEmitter<void>();
  @ViewChild('popup') popup!: PopupComponent;

  constructor(private authService: AuthService) {}

  displayMessage(message: string) {
    this.popup.show(message);
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.loggedIn = status;

      if (status) {
        const userDetails = JSON.parse(
          localStorage.getItem('loggedInUser') || '{}'
        );
        console.log(userDetails);
        this.userName = userDetails.name || 'User';
      } else {
        this.userName = 'Sign In';
      }
    });
  }

  toggleLoginLogout() {
    if (this.loggedIn) {
      localStorage.removeItem('loggedInUser');
      this.authService.setLoggedIn(false);
      this.displayMessage('You have been logged out.');
    } else {
      this.openLoginSidebar();
    }
  }

  openLoginSidebar() {
    this.loginToggle.emit();
  }

  onUserLoggedIn() {
    this.loggedIn = true;
  }

  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
