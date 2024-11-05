import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor() { }
    // Define the items list
items: { src: string; name: string }[] = [
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png', name: 'Biryani' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png', name: 'Pizza' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png', name: 'Burger' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png', name: 'Shawarma' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png', name: 'Chinese' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png', name: 'Cake' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png', name: 'Ice Cream' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png', name: 'Kebab' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png', name: 'North Indian' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png', name: 'Noodles' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png', name: 'Rolls' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png', name: 'South Indian' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png', name: 'Dosa' },
];

getItems() {
  return this.items;
}



restaurantCards = [
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a515c573-f6bd-48bc-99b3-cda9edeb1ac4_559248.JPG',
    offer: '₹125 off above ₹1199',
    name: 'Domino\'s Pizza',
    rating: 4.5,
    deliveryTime: '20-30 mins',
    cuisine: 'Pizzas, Italian, Desserts',
    location: 'Saheed Nagar'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/53d5f5b4-1e37-4855-8f11-aa5ef1d12d47_408185.jpg',
    offer: '₹100 off above ₹999',
    name: 'Pizza Hut',
    rating: 4.3,
    deliveryTime: '25-35 mins',
    cuisine: 'Pizzas, Fast Food',
    location: 'MG Road'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/db2f458b-9036-4826-9dc1-bcd9c758ff80_75280.JPG',
    offer: 'Free delivery above ₹799',
    name: 'Burger King',
    rating: 4.0,
    deliveryTime: '15-25 mins',
    cuisine: 'Burgers, Fast Food',
    location: 'Park Street'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a515c573-f6bd-48bc-99b3-cda9edeb1ac4_559248.JPG',
    offer: '₹75 off above ₹499',
    name: 'KFC',
    rating: 4.2,
    deliveryTime: '18-28 mins',
    cuisine: 'Chicken, Fast Food',
    location: 'City Center'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/53d5f5b4-1e37-4855-8f11-aa5ef1d12d47_408185.jpg',
    offer: '₹50 off above ₹299',
    name: 'Subway',
    rating: 4.1,
    deliveryTime: '10-20 mins',
    cuisine: 'Sandwiches, Healthy',
    location: 'Downtown'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/db2f458b-9036-4826-9dc1-bcd9c758ff80_75280.JPG',
    offer: '10% off on all items',
    name: 'Taco Bell',
    rating: 4.3,
    deliveryTime: '25-35 mins',
    cuisine: 'Mexican, Tacos',
    location: 'Baker Street'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a515c573-f6bd-48bc-99b3-cda9edeb1ac4_559248.JPG',
    offer: 'Free drink with orders above ₹500',
    name: 'Starbucks',
    rating: 4.7,
    deliveryTime: '15-25 mins',
    cuisine: 'Coffee, Desserts',
    location: 'Central Mall'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/53d5f5b4-1e37-4855-8f11-aa5ef1d12d47_408185.jpg',
    offer: '₹100 off on all orders',
    name: 'Sushi Express',
    rating: 4.6,
    deliveryTime: '30-40 mins',
    cuisine: 'Japanese, Sushi',
    location: 'Riverside'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/db2f458b-9036-4826-9dc1-bcd9c758ff80_75280.JPG',
    offer: '₹150 off above ₹800',
    name: 'McDonald\'s',
    rating: 4.4,
    deliveryTime: '20-30 mins',
    cuisine: 'Burgers, Fast Food',
    location: 'Greenwood Park'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a515c573-f6bd-48bc-99b3-cda9edeb1ac4_559248.JPG',
    offer: '₹50 off above ₹400',
    name: 'The Great Indian Kitchen',
    rating: 4.8,
    deliveryTime: '30-40 mins',
    cuisine: 'Indian, North Indian',
    location: 'Old Town'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/53d5f5b4-1e37-4855-8f11-aa5ef1d12d47_408185.jpg',
    offer: '15% off above ₹300',
    name: 'Italiano',
    rating: 4.5,
    deliveryTime: '35-45 mins',
    cuisine: 'Italian, Pasta',
    location: 'High Street'
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/db2f458b-9036-4826-9dc1-bcd9c758ff80_75280.JPG',
    offer: '₹75 off above ₹600',
    name: 'Sweet Treats',
    rating: 4.9,
    deliveryTime: '25-35 mins',
    cuisine: 'Desserts, Cakes',
    location: 'Market Street'
  }
];


getRestaurantCards() {
  return this.restaurantCards;
}


restaurantWithItems = [
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a515c573-f6bd-48bc-99b3-cda9edeb1ac4_559248.JPG',
    offer: '₹125 off above ₹1199',
    name: "Domino's Pizza",
    rating: 4.5,
    deliveryTime: '20-30 mins',
    cuisine: 'Pizzas, Italian, Desserts',
    location: 'Saheed Nagar',
    items: [
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png',
        itemName: 'Margherita Pizza',
        price: 249,
        description: 'Classic cheese pizza with a fresh tomato base and herbs.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png',
        itemName: 'Chicken Supreme Pizza',
        price: 369,
        description: 'Loaded with tender chicken, bell peppers, and mozzarella.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
        itemName: 'Chocolate Lava Cake',
        price: 99,
        description: 'Molten chocolate cake served warm with a gooey center.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png',
        itemName: 'Garlic Breadsticks',
        price: 119,
        description: 'Freshly baked breadsticks brushed with garlic butter.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
        itemName: 'Tandoori Paneer Pizza',
        price: 299,
        description: 'Spicy tandoori paneer toppings with onions and capsicum.'
      }
    ]
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/53d5f5b4-1e37-4855-8f11-aa5ef1d12d47_408185.jpg',
    offer: '₹100 off above ₹999',
    name: 'Pizza Hut',
    rating: 4.3,
    deliveryTime: '25-35 mins',
    cuisine: 'Pizzas, Fast Food',
    location: 'MG Road',
    items: [
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png',
        itemName: 'Pepperoni Feast',
        price: 399,
        description: 'Classic pepperoni slices on a cheese and tomato base.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
        itemName: 'Stuffed Garlic Bread',
        price: 139,
        description: 'Soft garlic bread stuffed with cheese and herbs.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png',
        itemName: 'Chicken Tikka Pizza',
        price: 349,
        description: 'Flavorful tikka-marinated chicken on a cheesy crust.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
        itemName: 'Chocolate Mousse',
        price: 99,
        description: 'Rich chocolate mousse with a creamy texture.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png',
        itemName: 'Veggie Delight',
        price: 289,
        description: 'A mix of fresh veggies topped with mozzarella.'
      }
    ]
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/db2f458b-9036-4826-9dc1-bcd9c758ff80_75280.JPG',
    offer: 'Free delivery above ₹799',
    name: 'Burger King',
    rating: 4.0,
    deliveryTime: '15-25 mins',
    cuisine: 'Burgers, Fast Food',
    location: 'Park Street',
    items: [
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
        itemName: 'Whopper',
        price: 199,
        description: 'Signature Whopper with flame-grilled patty, lettuce, and mayo.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
        itemName: 'Cheesy Fries',
        price: 79,
        description: 'Crispy fries topped with melted cheese.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
        itemName: 'Chicken Nuggets',
        price: 149,
        description: 'Juicy chicken nuggets served with a side of ketchup.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
        itemName: 'Vanilla Shake',
        price: 99,
        description: 'Thick and creamy vanilla shake topped with whipped cream.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png',
        itemName: 'Spicy Chicken Burger',
        price: 249,
        description: 'Burger with crispy, spicy chicken patty and fresh veggies.'
      }
    ]
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/53d5f5b4-1e37-4855-8f11-aa5ef1d12d47_408185.jpg',
    offer: '₹50 off above ₹299',
    name: 'Subway',
    rating: 4.1,
    deliveryTime: '10-20 mins',
    cuisine: 'Sandwiches, Healthy',
    location: 'Downtown',
    items: [
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
        itemName: 'Veggie Delight Sub',
        price: 179,
        description: 'Fresh veggie sub with tomatoes, cucumbers, and lettuce.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png',
        itemName: 'Chicken Teriyaki Sub',
        price: 229,
        description: 'Sweet teriyaki-glazed chicken with fresh veggies.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
        itemName: 'Turkey Breast Sub',
        price: 239,
        description: 'Lean turkey breast with fresh toppings and your choice of sauce.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
        itemName: 'Choco Chip Cookie',
        price: 50,
        description: 'Classic cookie with chocolate chips baked to perfection.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
        itemName: 'Double Chocolate Cookie',
        price: 50,
        description: 'Deliciously rich double chocolate cookie.'
      }
    ]
  },

  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a515c573-f6bd-48bc-99b3-cda9edeb1ac4_559248.JPG',
    offer: '₹125 off above ₹1199',
    name: "KFC",
    rating: 4.5,
    deliveryTime: '20-30 mins',
    cuisine: 'Pizzas, Italian, Desserts',
    location: 'Saheed Nagar',
    items: [
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png',
        itemName: 'Margherita Pizza',
        price: 249,
        description: 'Classic cheese pizza with a fresh tomato base and herbs.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png',
        itemName: 'Chicken Supreme Pizza',
        price: 369,
        description: 'Loaded with tender chicken, bell peppers, and mozzarella.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
        itemName: 'Chocolate Lava Cake',
        price: 99,
        description: 'Molten chocolate cake served warm with a gooey center.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png',
        itemName: 'Garlic Breadsticks',
        price: 119,
        description: 'Freshly baked breadsticks brushed with garlic butter.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
        itemName: 'Tandoori Paneer Pizza',
        price: 299,
        description: 'Spicy tandoori paneer toppings with onions and capsicum.'
      }
    ]
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/53d5f5b4-1e37-4855-8f11-aa5ef1d12d47_408185.jpg',
    offer: '₹100 off above ₹999',
    name: 'Taco Bell',
    rating: 4.3,
    deliveryTime: '25-35 mins',
    cuisine: 'Pizzas, Fast Food',
    location: 'MG Road',
    items: [
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png',
        itemName: 'Pepperoni Feast',
        price: 399,
        description: 'Classic pepperoni slices on a cheese and tomato base.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
        itemName: 'Stuffed Garlic Bread',
        price: 139,
        description: 'Soft garlic bread stuffed with cheese and herbs.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png',
        itemName: 'Chicken Tikka Pizza',
        price: 349,
        description: 'Flavorful tikka-marinated chicken on a cheesy crust.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
        itemName: 'Chocolate Mousse',
        price: 99,
        description: 'Rich chocolate mousse with a creamy texture.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png',
        itemName: 'Veggie Delight',
        price: 289,
        description: 'A mix of fresh veggies topped with mozzarella.'
      }
    ]
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/db2f458b-9036-4826-9dc1-bcd9c758ff80_75280.JPG',
    offer: 'Free delivery above ₹799',
    name: 'Sushi Express',
    rating: 4.0,
    deliveryTime: '15-25 mins',
    cuisine: 'Burgers, Fast Food',
    location: 'Park Street',
    items: [
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
        itemName: 'Whopper',
        price: 199,
        description: 'Signature Whopper with flame-grilled patty, lettuce, and mayo.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
        itemName: 'Cheesy Fries',
        price: 79,
        description: 'Crispy fries topped with melted cheese.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
        itemName: 'Chicken Nuggets',
        price: 149,
        description: 'Juicy chicken nuggets served with a side of ketchup.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
        itemName: 'Vanilla Shake',
        price: 99,
        description: 'Thick and creamy vanilla shake topped with whipped cream.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png',
        itemName: 'Spicy Chicken Burger',
        price: 249,
        description: 'Burger with crispy, spicy chicken patty and fresh veggies.'
      }
    ]
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/53d5f5b4-1e37-4855-8f11-aa5ef1d12d47_408185.jpg',
    offer: '₹50 off above ₹299',
    name: "McDonald's",
    rating: 4.1,
    deliveryTime: '10-20 mins',
    cuisine: 'Sandwiches, Healthy',
    location: 'Downtown',
    items: [
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
        itemName: 'Veggie Delight Sub',
        price: 179,
        description: 'Fresh veggie sub with tomatoes, cucumbers, and lettuce.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png',
        itemName: 'Chicken Teriyaki Sub',
        price: 229,
        description: 'Sweet teriyaki-glazed chicken with fresh veggies.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
        itemName: 'Turkey Breast Sub',
        price: 239,
        description: 'Lean turkey breast with fresh toppings and your choice of sauce.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
        itemName: 'Choco Chip Cookie',
        price: 50,
        description: 'Classic cookie with chocolate chips baked to perfection.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
        itemName: 'Double Chocolate Cookie',
        price: 50,
        description: 'Deliciously rich double chocolate cookie.'
      }
    ]
  },
  {
    imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/53d5f5b4-1e37-4855-8f11-aa5ef1d12d47_408185.jpg',
    offer: '₹50 off above ₹299',
    name: "The Great indian Kitchen",
    rating: 4.1,
    deliveryTime: '10-20 mins',
    cuisine: 'Sandwiches, Healthy',
    location: 'Downtown',
    items: [
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
        itemName: 'Veggie Delight Sub',
        price: 179,
        description: 'Fresh veggie sub with tomatoes, cucumbers, and lettuce.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png',
        itemName: 'Chicken Teriyaki Sub',
        price: 229,
        description: 'Sweet teriyaki-glazed chicken with fresh veggies.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
        itemName: 'Turkey Breast Sub',
        price: 239,
        description: 'Lean turkey breast with fresh toppings and your choice of sauce.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
        itemName: 'Choco Chip Cookie',
        price: 50,
        description: 'Classic cookie with chocolate chips baked to perfection.'
      },
      {
        imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
        itemName: 'Double Chocolate Cookie',
        price: 50,
        description: 'Deliciously rich double chocolate cookie.'
      }
    ]
  },

];

getRestaurantByName(name: string) {
  return this.restaurantWithItems.find(restaurant => restaurant.name.toLowerCase() === name.toLowerCase());
}



}
