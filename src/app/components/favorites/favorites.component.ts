

import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CommonModule, PopupComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  isLoggedIn = false;

  favouriteItems: {
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
      isFavorite: boolean; 
    }[];
  }[] = []; // Set as an array to hold multiple restaurants

  constructor(private router: Router, private authService: AuthService, private http: HttpClient,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      console.log('Login status:', this.isLoggedIn);
    });
    this.loadFavouriteItems();
    console.log(this.favouriteItems);
  }

  loadFavouriteItems() {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favouriteItems = storedFavorites;
  }

  addItemToCart(item: any, restaurantId: string) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let restaurantInCart = cart.find((cartRestaurant: any) => cartRestaurant.resId === restaurantId);

    if (restaurantInCart) {
      const existingItem = restaurantInCart.items.find((cartItem: any) => cartItem.itemId === item.itemId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        restaurantInCart.items.push({ ...item, quantity: 1 });
      }
    } else {
      const restaurant = this.favouriteItems.find(r => r.resId === restaurantId);
      if (restaurant) {
        cart.push({
          resId: restaurant.resId,
          name: restaurant.name,
          imgUrl: restaurant.imageUrl,
          location: restaurant.location,
          items: [{ ...item, quantity: 1 }]
        });
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
  }

  // toggleFavorite(item: any, restaurantId: string) {
  //   const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  //   let restaurantInFavorites = favorites.find((fav: any) => fav.resId === restaurantId);

  //   if (restaurantInFavorites) {
  //     const itemIndex = restaurantInFavorites.items.findIndex((favItem: any) => favItem.itemId === item.itemId);
  //     if (itemIndex > -1) {
  //       restaurantInFavorites.items.splice(itemIndex, 1);
  //       item.isFavorite = false;

  //       if (restaurantInFavorites.items.length === 0) {
  //         const updatedFavorites = favorites.filter((fav: any) => fav.resId !== restaurantId);
  //         localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  //         alert('Item and restaurant removed from favorites!');
  //       } else {
  //         localStorage.setItem('favorites', JSON.stringify(favorites));
  //         alert('Item removed from favorites!');
  //       }
  //     } else {
  //       restaurantInFavorites.items.push({ ...item, isFavorite: true });
  //       item.isFavorite = true;
  //       localStorage.setItem('favorites', JSON.stringify(favorites));
  //       alert('Item added to favorites!');
  //     }
  //   } else {
  //     const restaurant = this.favouriteItems.find(r => r.resId === restaurantId);
  //     if (restaurant) {
  //       favorites.push({
  //         resId: restaurant.resId,
  //         name: restaurant.name,
  //         imgUrl: restaurant.imageUrl,
  //         location: restaurant.location,
  //         items: [{ ...item, isFavorite: true }]
  //       });
  //       item.isFavorite = true;
  //       localStorage.setItem('favorites', JSON.stringify(favorites));
  //       alert('Restaurant and item added to favorites!');
  //     }
  //   }
  // }

  toggleFavorite(item: any, restaurantId: string) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let restaurantInFavorites = favorites.find((fav: any) => fav.resId === restaurantId);

    if (restaurantInFavorites) {
      const itemIndex = restaurantInFavorites.items.findIndex((favItem: any) => favItem.itemId === item.itemId);
      if (itemIndex > -1) {
        // Remove item from restaurant favorites
        restaurantInFavorites.items.splice(itemIndex, 1);
        item.isFavorite = false;

        // If no items left, remove restaurant from favorites
        if (restaurantInFavorites.items.length === 0) {
          const updatedFavorites = favorites.filter((fav: any) => fav.resId !== restaurantId);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

          // Also update favouriteItems to reflect the UI change
          this.favouriteItems = this.favouriteItems.filter(fav => fav.resId !== restaurantId);
        } else {
          localStorage.setItem('favorites', JSON.stringify(favorites));
        }
      } else {
        // Add item to restaurant's favorites if it doesn't exist
        restaurantInFavorites.items.push({ ...item, isFavorite: true });
        item.isFavorite = true;
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    } else {
      // If restaurant isn't in favorites, add it with the item
      const restaurant = this.favouriteItems.find(r => r.resId === restaurantId);
      if (restaurant) {
        favorites.push({
          resId: restaurant.resId,
          name: restaurant.name,
          imgUrl: restaurant.imageUrl,
          location: restaurant.location,
          items: [{ ...item, isFavorite: true }]
        });
        item.isFavorite = true;
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    }

    // Update favouriteItems directly for immediate UI update
    this.loadFavouriteItems();
    this.cdr.detectChanges(); // Force Angular to update the view
  }


  @ViewChild('popup') popup!: PopupComponent;

  displayMessage() {
    this.popup.show('This is a message from OtherComponent!');
  }

}
