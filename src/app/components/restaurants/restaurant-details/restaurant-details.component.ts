import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MenuListService } from '../../../services/menu-list.service';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../popup/popup.component';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [NavbarComponent, CommonModule, PopupComponent],
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantName: string | null = '';
  quantity = 0;
  isFavorite = false;
  restaurantItem:
    | {
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
    private restaurantItems: MenuListService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.restaurantName = params['name'];
      this.restaurantItem = this.restaurantItems.getRestaurantByName(
        this.restaurantName!
      );

      if (this.restaurantItem) {
        // Initialize each item's quantity to 0
        // this.restaurantItem.items = this.restaurantItem.items.map((item) => ({
        //   ...item,
        // }));
        this.checkIfCart();
        this.checkIfFavorite();
      }
    });
  }

  @ViewChild('popup') popup!: PopupComponent;

  displayMessage(message: string) {
    this.popup.show(message);
  }

  addItemToCart(item: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let restaurantInCart = cart.find(
      (cartRestaurant: any) =>
        cartRestaurant.resId === this.restaurantItem?.resId
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
        items: [{ ...item, quantity: 1 }],
      });
    }

    // Set quantity for the individual item and update cart in local storage
    item.quantity = 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    this.displayMessage('Item added to cart!');
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }


  checkIfCart() {
    const carts = JSON.parse(localStorage.getItem('cart') || '[]');
    const restaurantInCart = carts.find(
      (cartItem: any) => cartItem.resId === this.restaurantItem?.resId
    );
  
    if (restaurantInCart && this.restaurantItem) {
      // Ensure each item has quantity set based on localStorage data
      this.restaurantItem.items = this.restaurantItem.items.map((item) => {
        const cartItem = restaurantInCart.items.find(
          (cartItem: any) => cartItem.itemId === item.itemId
        );
        const quantity = cartItem ? cartItem.quantity : 0; // Default to 0 if item not in cart
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
      // Ensure each item has isFavorite set based on localStorage data
      this.restaurantItem.items = this.restaurantItem.items.map((item) => {
        const isFavorite = restaurantInFavorites.items.some(
          (favItem: any) => favItem.itemId === item.itemId
        );
        
        return { ...item, isFavorite };
      });
    }
  }

  toggleFavorite(item: any) {
    // Retrieve favorites from local storage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let restaurantInFavorites = favorites.find(
      (fav: any) => fav.resId === this.restaurantItem?.resId
    );

    if (restaurantInFavorites) {
      // Check if the item already exists in the favorites for the restaurant
      const itemIndex = restaurantInFavorites.items.findIndex(
        (favItem: any) => favItem.itemId === item.itemId
      );
      if (itemIndex > -1) {
        // If item exists, remove it from favorites
        restaurantInFavorites.items.splice(itemIndex, 1);
        item.isFavorite = false;

        // If no items left for this restaurant, remove the restaurant from favorites
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
        // If item does not exist, add it to favorites
        restaurantInFavorites.items.push({ ...item, isFavorite: true });
        item.isFavorite = true;
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.displayMessage('Item added to favorites!');
      }
    } else {
      // If restaurant is not in favorites, add it with the selected item
      favorites.push({
        resId: this.restaurantItem?.resId,
        name: this.restaurantItem?.name,
        imgUrl: this.restaurantItem?.imageUrl,
        location: this.restaurantItem?.location,
        offer: this.restaurantItem?.offer,
        rating: this.restaurantItem?.rating,
        deliveryTime: this.restaurantItem?.deliveryTime,
        coisine: this.restaurantItem?.cuisine,
        items: [{ ...item, isFavorite: true }], // Ensure isFavorite is set on the new item
      });
      item.isFavorite = true;
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.displayMessage('Restaurant and item added to favorites!');
    }
  }
}
