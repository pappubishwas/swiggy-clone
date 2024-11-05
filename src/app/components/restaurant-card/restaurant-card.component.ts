import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [NgStyle, NgFor,NgClass],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css',
})
export class RestaurantCardComponent {
  currentIndex = 0;           // Tracks the current visible card index
  visibleImages = 3;           // Number of images visible at a time
  restaurants = [
    {
      name: "Gabru Di Chaap",
      rating: 3.7,
      cuisine: "Kebab • North Indian",
      price: "₹500 for two",
      location: "Attapur, Hyderabad",
      distance: "1.7 km",
      offers: [
        { text: "Flat 10% off on walk-in", more: "+1 more" },
        { text: "Upto 15% off with bank offers", more: "+1 more" },
      ],
      image: "assets/res1.webp",
    },
    {
      name: "Spice Route",
      rating: 4.2,
      cuisine: "South Indian • Biryani",
      price: "₹700 for two",
      location: "Banjara Hills, Hyderabad",
      distance: "3.5 km",
      offers: [
        { text: "20% off on first order", more: "+1 more" },
        { text: "Free dessert with every course", more: "+1 more" },
      ],
      image: "assets/re2.webp",
    },
    {
      name: "Pizza Hub",
      rating: 4.5,
      cuisine: "Italian • Pizza",
      price: "₹600 for two",
      location: "Gachibowli, Hyderabad",
      distance: "5.0 km",
      offers: [
        { text: "Buy 1 Get 1 Free on Fridays", more: "+1 more" },
        { text: "Flat 15% off on online orders", more: "+1 more" },
      ],
      image: "assets/res3.webp",
    },
    {
      name: "The Great Indian Dhaba",
      rating: 4.0,
      cuisine: "North Indian • Mughlai",
      price: "₹800 for two",
      location: "Secunderabad, Hyderabad",
      distance: "4.2 km",
      offers: [
        { text: "Free drink with every order", more: "+1 more" },
        { text: "15% off on dine-in", more: "+1 more" },
      ],
      image: "assets/re4.webp",
    },
    {
      name: "Sushi House",
      rating: 4.7,
      cuisine: "Japanese • Sushi",
      price: "₹900 for two",
      location: "Kondapur, Hyderabad",
      distance: "6.1 km",
      offers: [
        { text: "30% off on first order", more: "+1 more" },
        { text: "Free miso soup with every platter", more: "+1 more" },
      ],
      image: "assets/res5.webp",
    },
    {
      name: "Veggie Delight",
      rating: 3.9,
      cuisine: "Vegetarian • Healthy",
      price: "₹400 for two",
      location: "Hitec City, Hyderabad",
      distance: "2.8 km",
      offers: [
        { text: "Flat 10% off on all salads", more: "+1 more" },
        { text: "Buy 1 Get 1 Free on smoothies", more: "+1 more" },
      ],
      image: "assets/res6.webp",
    },
  ];

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  moveRight() {
    if (this.currentIndex < this.restaurants.length - this.visibleImages) {
      this.currentIndex++;
    }
  }
}
