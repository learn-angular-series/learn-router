import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture.component';
import { pictureRoutes } from './picture.routes';
import { RouterModule } from '@angular/router';
import { GifComponent } from './gif/gif.component';
import { JpgComponent } from './jpg/jpg.component';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pictureRoutes)
  ],
  providers:[AuthGuard],
  declarations: [PictureComponent, GifComponent, JpgComponent]
})
export class PictureModule { }
