import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  cities = [
    { name: 'Mumbai' }, { name: 'Delhi' }, { name: 'Bengaluru' }, { name: 'Hyderabad' },
    { name: 'Ahmedabad' }, { name: 'Chennai' }, { name: 'Kolkata' }, { name: 'Surat' },
    { name: 'Pune' }, { name: 'Jaipur' }, { name: 'Lucknow' }, { name: 'Kanpur' },
    { name: 'Nagpur' }, { name: 'Indore' }, { name: 'Thane' }, { name: 'Bhopal' },
    { name: 'Visakhapatnam' }, { name: 'Pimpri-Chinchwad' }, { name: 'Patna' },
    { name: 'Vadodara' }, { name: 'Ghaziabad' }, { name: 'Ludhiana' }, { name: 'Agra' },
    { name: 'Nashik' }, { name: 'Faridabad' }, { name: 'Meerut' }, { name: 'Rajkot' },
    { name: 'Kalyan-Dombivli' }, { name: 'Vasai-Virar' }, { name: 'Varanasi' },
    { name: 'Srinagar' }, { name: 'Aurangabad' }, { name: 'Dhanbad' }, { name: 'Amritsar' }
  ];
  showAll = false;
  displayedCities = this.cities.slice(0, 8);

  toggleShowMore() {
    this.showAll = !this.showAll;
    this.displayedCities = this.showAll ? this.cities : this.cities.slice(0, 15);
  }
}
