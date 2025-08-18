import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { OffersService } from '../offers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VoteButtonsComponent } from '../../shared/voteButtons.component';
import { BuyButtonComponent } from '../../shared/buyButton.component';
import { MaterialModule } from '../../shared/material.module';
import { Offer } from '../offer.model';

@Component({
  selector: 'app-offer-detail',
  imports: [
    VoteButtonsComponent,
    BuyButtonComponent,
    MaterialModule,
    RouterModule,
  ],
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private offersService = inject(OffersService);

  offerId!: number;
  offerSignal!: Signal<Offer | undefined>;

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    if (id) {
      this.offerId = id;
    }

    this.offerSignal = computed(() => this.offersService.getOfferById(this.offerId));

    if (!this.offerSignal()) {
      this.snackBar.open('Offer not found', '', { duration: 2000 });
      setTimeout(() => this.router.navigate(['/']), 2000);
    }
  }

  upvote() {
    const offer = this.offerSignal();
    if (offer) {
      this.offersService.upvote(offer.id);
      if (localStorage.getItem('isLoggedIn') == 'true') {
        this.snackBar.open('Upvoted!', '', { duration: 1000 });
      }
    }
  }

  downvote() {
    const offer = this.offerSignal();
    if (offer) {
      this.offersService.downvote(offer.id);
      if (localStorage.getItem('isLoggedIn') == 'true') {
        this.snackBar.open('Downvoted!', '', { duration: 1000 });
      }
    }
  }

  addToCart(id: number) {
    this.offersService.buy(id);
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.snackBar.open('Added to Cart!', '', { duration: 1500 });
      setTimeout(() => this.router.navigate(['/']), 1800);
    }
  }
}
