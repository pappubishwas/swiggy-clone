import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, HttpClientModule,PopupComponent], // Add HttpClientModule here
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  
  @ViewChild('popup') popup!: PopupComponent;

  currency: any;
  mockapi = 'https://671678883fcb11b265d28ea7.mockapi.io/orders';
  isLoggedIn = false;
  totalBill = 0;

  cartItems:{
    resId: string;
    imgUrl: string;
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
  }[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      console.log('Login status:', this.isLoggedIn);
    });
    this.loadCartItems();
    this.calculateTotalPay();
    console.log(this.cartItems);
  }

  loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItems = cart;
  }

  increaseQuantity(item: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
    // Find the restaurant in cart and the item within it
    const restaurantInCart = cart.find((cartRestaurant: any) =>
      cartRestaurant.items.some((cartItem: any) => cartItem.itemId === item.itemId)
    );
  
    if (restaurantInCart) {
      const existingItem = restaurantInCart.items.find(
        (cartItem: any) => cartItem.itemId === item.itemId
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  
    // Update local cartItems to reflect changes
    this.loadCartItems();
    this.calculateTotalPay();
    this.cdr.detectChanges();
  }
  
  decreaseQuantity(item: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
    // Find the restaurant in cart and the item within it
    const restaurantInCart = cart.find((cartRestaurant: any) =>
      cartRestaurant.items.some((cartItem: any) => cartItem.itemId === item.itemId)
    );
  
    if (restaurantInCart) {
      const existingItem = restaurantInCart.items.find(
        (cartItem: any) => cartItem.itemId === item.itemId
      );
      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
  
        // Optionally, remove item if quantity is 0
        if (existingItem.quantity === 0) {
          restaurantInCart.items = restaurantInCart.items.filter(
            (cartItem: any) => cartItem.itemId !== item.itemId
          );
        }
  
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  
    // Update local cartItems to reflect changes
    this.loadCartItems();
    this.calculateTotalPay();
    this.cdr.detectChanges();
  }
  

  clearCart() {
    localStorage.removeItem('cart');
    this.cartItems = [];
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
  redirectToRestaurant() {
    this.router.navigate(['/restaurants']);
  }

  calculateTotalPay() {
    this.totalBill = 0;
    if (this.cartItems) {
      for (let restaurant of this.cartItems) {
        for (let item of restaurant.items) {
          this.totalBill += item.price * (item.quantity || 0); // Handle undefined quantity as 0
        }
      }
    }
  }

  placeOrder() {
    const orderData = {
      items: this.cartItems,
      totalAmount: this.totalBill,
    };

    this.http.post(this.mockapi, orderData).subscribe({
      next: (response) => {
        localStorage.removeItem('cart'); // This removes the cart from local storage
        this.cartItems = []; // This clears the cartItems array in the component        
        console.log('Order placed successfully:', response);
        this.displayMessage('Order placed successfully!');
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error placing order:', error);
        this.displayMessage('Failed to place order. Please try again.');
      },
    });
  }

  displayMessage(message: string) {
    this.popup.show(message);
  }
}
