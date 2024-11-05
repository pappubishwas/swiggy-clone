import { Component, OnInit } from '@angular/core';
import { MenuListService } from '../../services/menu-list.service'; 
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent implements OnInit {
  currentIndex = 0;           
  visibleImages = 5;           
  


  items: { src: string; name: string }[] = [];
  restaurantCards: { imageUrl: string; name: string; offer: string; rating: number; deliveryTime: string; cuisine: string; location: string }[] = [];

  constructor(private menuService: MenuListService, private router: Router) {}
  
  redirectRestaurantDetailsPage(restaurantName: string) {
    this.router.navigate(['/restaurants-details'], { queryParams: { name: restaurantName } });
  }

  ngOnInit(): void {
    this.items = this.menuService.getItems();
    this.restaurantCards = this.menuService.getRestaurantCards();
  }

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  moveRight() {
    if (this.currentIndex < this.items.length - this.visibleImages) {
      this.currentIndex++;
    }
  }
   
  currentIndexRes = 0;           
  visibleImagesRes = 3; 

  moveLeftRes(){
    if(this.currentIndexRes>0){
      this.currentIndexRes--;
    }
  }
  moveRightRes(){
    if(this.currentIndexRes+this.visibleImagesRes<this.restaurantCards.length){
      this.currentIndexRes++;
    }
  }

}