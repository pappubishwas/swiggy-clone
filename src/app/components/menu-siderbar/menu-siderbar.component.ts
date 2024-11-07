import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-siderbar',
  standalone: true,
  imports: [],
  templateUrl: './menu-siderbar.component.html',
  styleUrl: './menu-siderbar.component.css',
})
export class MenuSiderbarComponent {
  @Input() isSidebarOpen: boolean = false;
  @Input() loggedIn: boolean = false;
  @Input() userName!: string;

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  
}
