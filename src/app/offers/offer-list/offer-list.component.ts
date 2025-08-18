import { Component, computed, inject, signal, Signal } from '@angular/core';
import { OffersService } from '../offers.service';
import { MaterialModule } from '../../shared/material.module';
import { Offer } from '../offer.model';
import { VoteButtonsComponent } from '../../shared/voteButtons.component';
import { BuyButtonComponent } from '../../shared/buyButton.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [MaterialModule, VoteButtonsComponent,
    BuyButtonComponent],
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent {
  private snackBar = inject(MatSnackBar);
  private offersService = inject(OffersService);

  offerId!: number;
  offers: Offer[];
  offersSignal: Signal<Offer[]> = computed(() =>
    this.offersService.offersSortedByVotes
  );

  constructor() {
    this.offers = this.offersService.offersSortedByVotes;
  }

  upvote(id: number) {
    this.offersService.upvote(id);
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.snackBar.open('Upvoted!', '', { duration: 1000 });
    }
  }

  addToCart(offerId: number) {
    this.offersService.buy(offerId);
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.snackBar.open('Added to Cart!', '', { duration: 1000 });
    }
  }

  downvote(id: number) {
    this.offersService.downvote(id);
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.snackBar.open('Downvoted!', '', { duration: 1000 });
    }
  }

}
