import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // Add HttpClientModule here
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  currency: any;
  mockapi = 'https://671678883fcb11b265d28ea7.mockapi.io/orders';
  isLoggedIn = false;
  cartItems: any[] = [];
  totalBill = 0;

  constructor(private router: Router, private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
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

  clearCart() {
    localStorage.removeItem('cart');
    this.cartItems = [];
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }

  calculateTotalPay() {
    this.totalBill = 0;
    for (let res of this.cartItems) {
      if (res.items) {
        for (let item of res.items) {
          this.totalBill += item.price * (item.quantity || 1);
        }
      }
    }
  }

  placeOrder() {
    const orderData = {
      items: this.cartItems,
      totalAmount: this.totalBill
    };

    this.http.post(this.mockapi, orderData).subscribe({
      next: (response) => {
        //localStorage.setItem('cart', JSON.stringify('[]'));
        console.log('Order placed successfully:', response);
        alert('Order placed successfully!');
      },
      error: (error) => {
        console.error('Error placing order:', error);
        alert('Failed to place order. Please try again.');
      }
    });
  }
}
