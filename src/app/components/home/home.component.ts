import { Component } from '@angular/core';
import { RestaurantCardComponent } from "../restaurant-card/restaurant-card.component";
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { CitiesComponent } from "../cities/cities.component";
import { FooterComponent } from "../footer/footer.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RestaurantCardComponent, HeaderComponent, HeroComponent, MenuItemComponent, CitiesComponent, FooterComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loginVisible = false;

  toggleLogin() {
    this.loginVisible = !this.loginVisible;
  }
}
