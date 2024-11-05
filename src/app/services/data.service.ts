import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  restaurants = [
    { id: 1, name: 'Pizza Hut', cuisine: 'Italian', location: 'Downtown' },
    { id: 2, name: 'Sushi Place', cuisine: 'Japanese', location: 'Uptown' }
    // Add more sample restaurants here
  ];

  menuItems = {
    1: [{ id: 1, name: 'Pepperoni Pizza', price: 8.99 }, { id: 2, name: 'Margarita Pizza', price: 7.99 }],
    2: [{ id: 3, name: 'Sushi Roll', price: 5.99 }, { id: 4, name: 'Tempura', price: 6.99 }]
    // Menu items for each restaurant
  };

  favorites: any[] = [];
  cart: any[] = [];

  getRestaurants() {
    return this.restaurants;
  }

  getMenuItems(restaurantId: number) {
    return this.menuItems[restaurantId] || [];
  }

  addToFavorites(item: any) {
    this.favorites.push(item);
  }

  getFavorites() {
    return this.favorites;
  }

  addToCart(item: any) {
    this.cart.push(item);
  }

  getCart() {
    return this.cart;
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
