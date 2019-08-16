import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { MapService } from './map.service';
import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  declarations: [
      MapComponent
  ],
  exports: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCJCRVL63qPP1ixtorKNXIKNHUHJ_yt2rg'
      })      
  ],
  providers: [MapService, CamelizePipe]
})
export class MapModule { }