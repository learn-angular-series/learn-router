import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture.component';
import { PictureRoutingModule } from './picture.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PictureRoutingModule
  ],
  declarations: [PictureComponent]
})
export class PictureModule { }
