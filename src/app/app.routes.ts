import { Routes } from '@angular/router';
import { OfferListComponent } from './offers/offer-list/offer-list.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';

export const routes: Routes = [
    { path: '', component: OfferListComponent },
    { path: 'offers/:id', component: OfferDetailComponent },
    { path: '**', redirectTo: '' }
];
