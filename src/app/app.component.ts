import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
  `,
  styles: [`
    main {
      padding: 16px;
      display: block;
      min-height: 80vh;
    }
  `]
})
export class AppComponent {
}
