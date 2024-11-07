import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() message: string = ''; // Message from other components
  isVisible: boolean = false; // Control visibility

  // Show the popup with a specific message
  show(message: string) {
    this.message = message;
    this.isVisible = true;
  }

  // Hide the popup
  hide() {
    this.isVisible = false;
  }
}
