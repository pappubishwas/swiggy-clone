import { Component, Input } from '@angular/core';
import { MenuListService } from '../../../services/menu-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input() restaurant: any;
  
  constructor(private menuService: MenuListService, private router: Router) {}
  
  redirectRestaurantDetailsPage(restaurantName: string) {
    this.router.navigate(['/restaurants-details'], { queryParams: { name: restaurantName } });
  }
}
