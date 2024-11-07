import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './components/restaurants/restaurant-details/restaurant-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants-details', component: RestaurantDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  {path:'favourites',component: FavoritesComponent},
];
