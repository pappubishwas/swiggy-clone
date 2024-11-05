import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  images: string[] = [
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
  ];
  images2: string[] = [
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png',
  ];

  groceries: string[] = [
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/0a688af1-1bb4-4a55-8128-31fc79cc9ad0_6d0abb9a-daff-4fbe-a1c9-2dddb6ae6717',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/85df9d8f-175f-4e3a-8945-468bf6317eee_eb9bf247-f2d1-413d-9cf5-48bc870b222f',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/ce6b51d4-0a5d-46c1-9f56-1a0d410c6e3f_d1e4f024-7ee2-4b7c-a12d-158f856a8aa2',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/db6c3340-4b90-4716-947b-ae3437c04a14_f17a2585-e93f-4545-9992-e8a8e44b5ddb',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/db6c3340-4b90-4716-947b-ae3437c04a14_f17a2585-e93f-4545-9992-e8a8e44b5ddb',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/1b399bee-38d3-4d59-a5b9-d81099257cab_0cdaa02f-7e62-4f79-a5d9-727abe1d16a5',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/2ead57e4-00b3-4525-91b2-9eb37a4be375_eee95c8a-e736-42ed-ab86-46add6ffe374',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/9314636d-dcb2-468b-bdad-9170f4133e14_00e24371-61a6-4ab5-98e9-552bb94d2557',
  ];
  visibleImages: number = 4;
  currentIndex: number = 0;
  groceriesCurrentIndex:number=0;
  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  moveRight() {
    if (this.currentIndex + this.visibleImages < this.images.length) {
      this.currentIndex += 1;
    }
  }
  moveLeftGroceries(){
    if(this.groceriesCurrentIndex>0){
      this.groceriesCurrentIndex-=1;
    }
  }

  moveRightGroceries(){
    if(this.groceriesCurrentIndex+this.visibleImages<this.groceries.length){
      this.groceriesCurrentIndex+=1;
    }
  }
}
