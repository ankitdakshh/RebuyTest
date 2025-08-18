import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vote-buttons',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  template: `
    <button mat-icon-button color="primary" (click)="upvote.emit()  ">
      <mat-icon>thumb_up</mat-icon>
    </button>
    <button mat-icon-button color="warn" (click)="downvote.emit()">
      <mat-icon>thumb_down</mat-icon>
    </button>
  `
})
export class VoteButtonsComponent {
  @Output() upvote = new EventEmitter<void>();
  @Output() downvote = new EventEmitter<void>();
}
