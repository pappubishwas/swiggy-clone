import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MenuListService } from '../../../services/menu-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.css'
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantName: string | null = '';
  restaurantItem: { imageUrl: string; offer: string; name: string; rating: number; deliveryTime: string; cuisine: string; location: string; items: { imgUrl: string; itemName: string; price: number; description: string; }[]; } | undefined;

  constructor(private route: ActivatedRoute, private restaurantItemsService: MenuListService) {}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.restaurantName = params['name'];

    this.restaurantItem = this.restaurantItemsService.getRestaurantByName(this.restaurantName || '');
  });
}

}
