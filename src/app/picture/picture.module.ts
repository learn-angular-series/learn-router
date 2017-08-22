import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture.component';
import { pictureRoutes } from './picture.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pictureRoutes)
  ],
  declarations: [PictureComponent]
})
export class PictureModule { }
