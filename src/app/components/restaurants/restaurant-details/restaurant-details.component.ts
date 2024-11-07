import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MenuListService } from '../../../services/menu-list.service';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from "../item-card/item-card.component";

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ItemCardComponent],
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  
  restaurantName: string | null = '';
  quantity = 0;
  isFavorite = false;
  restaurantItem: {
        resId: string;
        imageUrl: string;
        offer: string;
        name: string;
        rating: number;
        deliveryTime: string;
        cuisine: string;
        location: string;
        items: {
          itemId: string;
          imgUrl: string;
          itemName: string;
          price: number;
          description: string;
          quantity:number;
          isFavorite: boolean;
        }[];
      }
    | undefined;

  constructor(
    private route: ActivatedRoute,
    private restaurantItems: MenuListService,
    private cdr:ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.restaurantName = params['name'];
      this.restaurantItem = this.restaurantItems.getRestaurantByName(
        this.restaurantName!
      );

      if (this.restaurantItem) {

        this.checkIfCart();
        this.checkIfFavorite();
      }
    });
  }

  checkIfCart() {
    const carts = JSON.parse(localStorage.getItem('cart') || '[]');
    const restaurantInCart = carts.find(
      (cartItem: any) => cartItem.resId === this.restaurantItem?.resId
    );
  
    if (restaurantInCart && this.restaurantItem) {
 
      this.restaurantItem.items = this.restaurantItem.items.map((item) => {
        const cartItem = restaurantInCart.items.find(
          (cartItem: any) => cartItem.itemId === item.itemId
        );
        const quantity = cartItem ? cartItem.quantity : 0; 
        return { ...item, quantity };
      });
    }
  }
  


  checkIfFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const restaurantInFavorites = favorites.find(
      (fav: any) => fav.resId === this.restaurantItem?.resId
    );

    if (restaurantInFavorites && this.restaurantItem) {
      this.restaurantItem.items = this.restaurantItem.items.map((item) => {
        const isFavorite = restaurantInFavorites.items.some(
          (favItem: any) => favItem.itemId === item.itemId
        );
        
        return { ...item, isFavorite };
      });
    }
  }

}
