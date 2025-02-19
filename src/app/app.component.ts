import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import Aos from 'aos';
// import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ScrollupComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  title = 'diet-craft';
  
  // constructor(private utils: UtilsService) {}
  ngOnInit() {
    Aos.init();
  //   this.utils.initGLightbox();
  //   this.utils.initIsotope('.isotope-layout');
  //   this.utils.initSwiper();
  }
}
