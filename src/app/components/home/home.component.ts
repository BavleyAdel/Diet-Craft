import { Component, NgModule} from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { HeroComponent } from "../home sections/hero/hero.component";
import { ServicesComponent } from "../home sections/services/services.component";
import { StatsComponent } from "../home sections/stats/stats.component";
import { AboutComponent } from "../home sections/about/about.component";
import { StartComponent } from "../home sections/start/start.component";
import { FeaturesComponent } from "../home sections/features/features.component";


@Component({
  selector: 'app-home',
  imports: [CountUpModule, HeroComponent, ServicesComponent, StatsComponent, AboutComponent, StartComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// @NgModule({})
export class HomeComponent {
  // targetValue = 100; // The target value to count up to
  // countUpOptions = {
  //   duration: 2, // Duration in seconds
  //   separator:',', // Optional: Add a thousands separator
  // };
}
