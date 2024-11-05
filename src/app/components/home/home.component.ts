import { Component } from '@angular/core';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { CitiesComponent } from '../cities/cities.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RestaurantCardComponent,
    HeaderComponent,
    HeroComponent,
    MenuItemComponent,
    CitiesComponent,
    FooterComponent,
    LoginComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Note the plural 'styleUrls' 
})
export class HomeComponent {
  loginVisible = false;

  toggleLogin() {
    this.loginVisible = !this.loginVisible;
  }
}
