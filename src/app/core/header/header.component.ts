import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isBrowser: boolean;
  isLoggedIn = false;
  items: number[] = [];

  @Input() cartCount: number = 0;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    if (this.isBrowser) {
      const value = localStorage.getItem('isLoggedIn');
      this.isLoggedIn = value === 'true';
    }
  }

  onLogin() {
    if (this.isBrowser) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userId', '12345');
      this.isLoggedIn = true;
    }
  }

  onLogout() {
    if (this.isBrowser) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userId');
      this.isLoggedIn = false;
    }
  }
}
