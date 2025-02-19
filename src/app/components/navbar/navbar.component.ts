import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isActive = false;

  toggleMobileNav() {
    this.isActive = !this.isActive;
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    mobileNavToggleBtn?.classList.toggle('bi-list');
    mobileNavToggleBtn?.classList.toggle('bi-x');
  }

  closeMobileNav() {
    this.isActive = false;
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    mobileNavToggleBtn?.classList.remove('bi-x');
    mobileNavToggleBtn?.classList.add('bi-list');
  }
}
