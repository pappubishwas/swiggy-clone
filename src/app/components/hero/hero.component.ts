import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  constructor(private router: Router) {}

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  redirectRestaurantPage(){
    this.router.navigate(['/restaurants']);
  }
}
