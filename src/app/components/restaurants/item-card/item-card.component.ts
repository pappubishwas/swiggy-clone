import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { PopupComponent } from '../../popup/popup.component';
@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, PopupComponent],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})


export class ItemCardComponent {
  @ViewChild('popup') popup!: PopupComponent;
  @Input() item: any;  
  @Input() restaurantId: string | undefined; 
  @Input() restaurantItem: {
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
      quantity: number;
      isFavorite: boolean;
    }[];
  } | undefined;
  
  quantity = 0;
  isFavorite = false;

  constructor(private cdr: ChangeDetectorRef) {}
  
  addItemToCart(item: any) {
    console.log(this.restaurantId);
    console.log("Here is data"+this.restaurantItem)
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let restaurantInCart = cart.find(
      (cartRestaurant: any) => cartRestaurant.resId === this.restaurantItem?.resId
    );
  
    if (restaurantInCart) {
      const existingItem = restaurantInCart.items.find(
        (cartItem: any) => cartItem.itemId === item.itemId
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        restaurantInCart.items.push({ ...item, quantity: 1 });
      }
    } else {

      cart = [];
      cart.push({
        resId: this.restaurantItem?.resId,
        name: this.restaurantItem?.name,
        imgUrl: this.restaurantItem?.imageUrl,
        location: this.restaurantItem?.location,
        offer: this.restaurantItem?.offer,
        rating: this.restaurantItem?.rating,
        deliveryTime: this.restaurantItem?.deliveryTime,
        coisine: this.restaurantItem?.cuisine,
        items: [{ ...item, quantity: 1 }],
      });
    }
  

    const restaurantItemIndex = this.restaurantItem?.items.findIndex(
      (resItem) => resItem.itemId === item.itemId
    );
    if (restaurantItemIndex !== -1 && this.restaurantItem) {
      this.restaurantItem.items[restaurantItemIndex!].quantity = 1;
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    this.displayMessage('Item added to cart!');
    this.cdr.detectChanges();
  }




  displayMessage(message: string) {
    this.popup.show(message);
  }
 

  increaseQuantity(item: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const restaurantInCart = cart.find(
      (cartRestaurant: any) => cartRestaurant.resId === this.restaurantItem?.resId
    );
  
    if (restaurantInCart) {
      const existingItem = restaurantInCart.items.find(
        (cartItem: any) => cartItem.itemId === item.itemId
      );
      if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
  
        const restaurantItemIndex = this.restaurantItem?.items.findIndex(
          (resItem) => resItem.itemId === item.itemId
        );
        if (restaurantItemIndex !== -1 && this.restaurantItem) {
          this.restaurantItem.items[restaurantItemIndex!].quantity = existingItem.quantity;
        }
      }
    }
    this.cdr.detectChanges();
  }
  
  decreaseQuantity(item: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const restaurantInCart = cart.find(
      (cartRestaurant: any) => cartRestaurant.resId === this.restaurantItem?.resId
    );
  
    if (restaurantInCart) {
      const existingItem = restaurantInCart.items.find(
        (cartItem: any) => cartItem.itemId === item.itemId
      );
      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          restaurantInCart.items = restaurantInCart.items.filter(
            (cartItem: any) => cartItem.itemId !== item.itemId
          );
        }
        localStorage.setItem('cart', JSON.stringify(cart));
  
        const restaurantItemIndex = this.restaurantItem?.items.findIndex(
          (resItem) => resItem.itemId === item.itemId
        );
        if (restaurantItemIndex !== -1 && this.restaurantItem) {
          this.restaurantItem.items[restaurantItemIndex!].quantity = existingItem.quantity;
        }
      }
    }
    this.cdr.detectChanges();
  }

  toggleFavorite(item: any) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let restaurantInFavorites = favorites.find(
      (fav: any) => fav.resId === this.restaurantItem?.resId
    );

    if (restaurantInFavorites) {
      const itemIndex = restaurantInFavorites.items.findIndex(
        (favItem: any) => favItem.itemId === item.itemId
      );
      if (itemIndex > -1) {
        restaurantInFavorites.items.splice(itemIndex, 1);
        item.isFavorite = false;

        if (restaurantInFavorites.items.length === 0) {
          const updatedFavorites = favorites.filter(
            (fav: any) => fav.resId !== this.restaurantItem?.resId
          );
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
          this.displayMessage('Item and restaurant removed from favorites!');
        } else {
          localStorage.setItem('favorites', JSON.stringify(favorites));
          this.displayMessage('Item removed from favorites!');
        }
      } else {
        restaurantInFavorites.items.push({ ...item, isFavorite: true });
        item.isFavorite = true;
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.displayMessage('Item added to favorites!');
      }
    } else {
      favorites.push({
        resId: this.restaurantItem?.resId,
        name: this.restaurantItem?.name,
        imgUrl: this.restaurantItem?.imageUrl,
        location: this.restaurantItem?.location,
        offer: this.restaurantItem?.offer,
        rating: this.restaurantItem?.rating,
        deliveryTime: this.restaurantItem?.deliveryTime,
        coisine: this.restaurantItem?.cuisine,
        items: [{ ...item, isFavorite: true }], 
      });
      item.isFavorite = true;
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.displayMessage('Restaurant and item added to favorites!');
    }
  }
  
}
