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
  @Input() message: string = ''; 
  isVisible: boolean = false; 


  show(message: string) {
    this.message = message;
    this.isVisible = true;
  }


  hide() {
    this.isVisible = false;
  }
}
