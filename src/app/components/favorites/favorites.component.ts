

import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { ItemCardComponent } from "../restaurants/item-card/item-card.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CommonModule, PopupComponent, ItemCardComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @ViewChild('popup') popup!: PopupComponent;
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
      quantity:number;
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


  displayMessage(message:string) {
    this.popup.show(message);
  }

  loadFavouriteItems() {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favouriteItems = storedFavorites;
  }


  



  addItemToCart(item: any, restaurantId: string) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Find the restaurant in the cart by matching restaurantId
    let restaurantInCart = cart.find(
      (cartRestaurant: any) => cartRestaurant.resId === restaurantId
    );
  
    if (restaurantInCart) {
      // If the restaurant is already in the cart, find the item
      const existingItem = restaurantInCart.items.find(
        (cartItem: any) => cartItem.itemId === item.itemId
      );
      
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        restaurantInCart.items.push({ ...item, quantity: 1 }); // Add new item
      }
    } else {
      // If the restaurant is not in the cart, find it from favouriteItems
      const restaurant = this.favouriteItems.find(r => r.resId === restaurantId);
      if (restaurant) {
        cart = [];
        cart.push({
          resId: restaurant.resId,
          name: restaurant.name,
          imgUrl: restaurant.imageUrl,
          location: restaurant.location,
          offer: restaurant.offer,
          rating: restaurant.rating,
          deliveryTime: restaurant.deliveryTime,
          cuisine: restaurant.cuisine,
          items: [{ ...item, quantity: 1 }], // Add the item with quantity
        });
      }
    }
  
    // Now find the item in the restaurant's items list and update its quantity
    const restaurantInFavorites = this.favouriteItems.find(r => r.resId === restaurantId);
    if (restaurantInFavorites) {
      const restaurantItemIndex = restaurantInFavorites.items.findIndex(
        (resItem) => resItem.itemId === item.itemId
      );
      if (restaurantItemIndex !== -1) {
        // Update the item's quantity if it's found
        restaurantInFavorites.items[restaurantItemIndex].quantity = 1;
      }
    }
  
    // Store the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    this.displayMessage('Item added to cart!');
    this.cdr.detectChanges();
  }

  

  increaseQuantity(item: any,restaurantId: string) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const restaurantInCart = cart.find(
      (cartRestaurant: any) => cartRestaurant.resId === restaurantId
    );
  
    if (restaurantInCart) {
      const existingItem = restaurantInCart.items.find(
        (cartItem: any) => cartItem.itemId === item.itemId
      );
      if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
  
        // Update restaurantItem's quantity for the item
        const restaurantInFavorites = this.favouriteItems.find(r => r.resId === restaurantId);
        if (restaurantInFavorites) {
          const restaurantItemIndex = restaurantInFavorites.items.findIndex(
            (resItem) => resItem.itemId === item.itemId
          );
          if (restaurantItemIndex !== -1) {
            // Update the item's quantity if it's found
            restaurantInFavorites.items[restaurantItemIndex].quantity = existingItem.quantity;
          }
        }
      }
    }
    this.cdr.detectChanges();
  }
  
  decreaseQuantity(item: any,restaurantId: string) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const restaurantInCart = cart.find(
      (cartRestaurant: any) => cartRestaurant.resId === restaurantId
    );
  
    if (restaurantInCart) {
      const existingItem = restaurantInCart.items.find(
        (cartItem: any) => cartItem.itemId === item.itemId
      );
      if (existingItem && existingItem.quantity>0) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          // Optionally, remove the item from the cart if quantity reaches zero
          restaurantInCart.items = restaurantInCart.items.filter(
            (cartItem: any) => cartItem.itemId !== item.itemId
          );
        }
        localStorage.setItem('cart', JSON.stringify(cart));
  
        // Update restaurantItem's quantity for the item
        const restaurantInFavorites = this.favouriteItems.find(r => r.resId === restaurantId);
        if (restaurantInFavorites) {
          const restaurantItemIndex = restaurantInFavorites.items.findIndex(
            (resItem) => resItem.itemId === item.itemId
          );
          if (restaurantItemIndex !== -1) {
            // Update the item's quantity if it's found
            restaurantInFavorites.items[restaurantItemIndex].quantity = existingItem.quantity;
          }
        }
      }
    }
    this.cdr.detectChanges();
  }

  


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
        this.displayMessage("Item removed from favourite list! ")
      } 
    } 

    // Update favouriteItems directly for immediate UI update
    this.loadFavouriteItems();
    this.cdr.detectChanges(); // Force Angular to update the view
  }



}
