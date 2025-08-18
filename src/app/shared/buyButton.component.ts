import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buy-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <button [disabled]="disabled"  mat-raised-button color="accent" (click)="buy.emit()">
      Add to Cart
    </button>
  `
})
export class BuyButtonComponent {
  @Input() disabled = false;
  @Output() buy = new EventEmitter<void>();
}
