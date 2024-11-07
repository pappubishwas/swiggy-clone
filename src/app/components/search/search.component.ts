import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  visibleImages: number = 10;
  currentIndex: number = 0;
  groceriesCurrentIndex: number = 0;
  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  moveRight() {
    if (this.currentIndex + this.visibleImages < this.items.length) {
      this.currentIndex += 1;
    }
  }

  items: { src: string; name: string }[] = [
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png',
      name: 'Biryani',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png',
      name: 'Pizza',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
      name: 'Burger',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png',
      name: 'Shawarma',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png',
      name: 'Chinese',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
      name: 'Cake',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
      name: 'Ice Cream',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png',
      name: 'Kebab',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png',
      name: 'North Indian',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
      name: 'Noodles',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
      name: 'Rolls',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png',
      name: 'South Indian',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png',
      name: 'Dosa',
    },
  ];

  menus: { src: string; name: string; type: string }[] = [
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Mutton%20Biryani.png',
      name: 'Biryani',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Mutton%20Biryani.png',
      name: 'Chicken Biryani',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/il9nuq4pbzjnutfoq6v1',
      name: 'Paneer Rolls',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_92284.JPG',
      name: 'Burger King',
      type: 'Restaurant',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/2957f04c-01a6-4075-a6cd-0e59fa80c815_74477.JPG',
      name: 'Domino’s Pizza',
      type: 'Restaurant',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Mutton%20Biryani.png',
      name: 'Vegetable Biryani',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/il9nuq4pbzjnutfoq6v1',
      name: 'Chicken Rolls',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_92284.JPG',
      name: 'KFC',
      type: 'Restaurant',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Mutton%20Biryani.png',
      name: 'Fish Biryani',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/il9nuq4pbzjnutfoq6v1',
      name: 'Veg Rolls',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/2957f04c-01a6-4075-a6cd-0e59fa80c815_74477.JPG',
      name: 'Pizza Hut',
      type: 'Restaurant',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Mutton%20Biryani.png',
      name: 'Mutton Biryani',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/il9nuq4pbzjnutfoq6v1',
      name: 'Shawarma',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_92284.JPG',
      name: 'McDonald’s',
      type: 'Restaurant',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Mutton%20Biryani.png',
      name: 'Prawn Biryani',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/il9nuq4pbzjnutfoq6v1',
      name: 'Spring Rolls',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/2957f04c-01a6-4075-a6cd-0e59fa80c815_74477.JPG',
      name: 'Subway',
      type: 'Restaurant',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Mutton%20Biryani.png',
      name: 'Egg Biryani',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/il9nuq4pbzjnutfoq6v1',
      name: 'Paneer Shawarma',
      type: 'Dish',
    },
    {
      src: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/2957f04c-01a6-4075-a6cd-0e59fa80c815_74477.JPG',
      name: 'Starbucks',
      type: 'Restaurant',
    },
  ];

  searchTerm: string = '';
  get filteredMenus() {
    const searchTerm = this.searchTerm.toLowerCase();
    return this.menus.filter((menu) =>
      searchTerm
        .split('')
        .every((letter) => menu.name.toLowerCase().includes(letter))
    );
  }
}
