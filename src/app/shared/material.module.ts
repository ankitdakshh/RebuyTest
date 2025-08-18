import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';


@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatBadgeModule,
        MatInputModule,
        RouterModule,
        CommonModule
    ]
})
export class MaterialModule { }
