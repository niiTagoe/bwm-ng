import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule, UcWordsPipe } from 'ngx-pipes';
import { MapModule } from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { FormsModule } from '@angular/forms';
import { EditableModule } from '../common/components/editable/editable.module';
import { ImageUploadModule } from '../common/components/image-upload/image-upload.module';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { RentalSearchComponent } from './rental-search/rental-search.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { RentalUpdateComponent } from './rental-update/rental-update.component';

import { RentalService } from './shared/rental.service';
import { HelperService } from '../common/service/helper.service';
import { BookingService } from '../booking/shared/booking.service';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';
import { AuthGuard } from '../auth/shared/auth.guard';
import { RentalGuard } from './shared/rental.guard';

const routes: Routes = [
    { path: 'rentals',
       component: RentalComponent, 
     children: [
         {path: '', component: RentalListComponent},
         {path: 'new', component: RentalCreateComponent, canActivate: [AuthGuard]},
         {path: ':rentalId/edit', component: RentalUpdateComponent, canActivate: [AuthGuard, RentalGuard]},
         {path: ':rentalId', component: RentalDetailComponent },
         {path: ':city/homes', component: RentalSearchComponent},
     ]
    }
  ]
  
@NgModule({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent,
        RentalDetailComponent,
        RentalDetailBookingComponent,
        UppercasePipe,
        RentalSearchComponent,
        RentalCreateComponent,
        RentalUpdateComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        NgPipesModule,
        RouterModule.forChild(routes),
        MapModule,
        Daterangepicker,
        FormsModule,
        EditableModule,
        ImageUploadModule
    ],
    providers: [
        RentalService,
        HelperService,
        BookingService,
        UcWordsPipe,
        RentalGuard
    ]
})
export class RentalModule {

}