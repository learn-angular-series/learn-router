import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture.component';
import { GifComponent } from './gif/gif.component';
import { JpgComponent } from './jpg/jpg.component';
import { AuthGuard } from '../auth/auth.guard';
import { PictureRoutingModule } from './picture.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PictureRoutingModule
  ],
  providers:[AuthGuard],
  declarations: [PictureComponent, GifComponent, JpgComponent]
})
export class PictureModule { }
