import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MultiPicComponent } from './multi-pic.component';
import {multiPictureRoutes} from './multi-picture.routes';
import { Gif2Component } from './gif2/gif2.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(multiPictureRoutes)
  ],
  declarations: [MultiPicComponent, Gif2Component, LeftNavComponent]
})
export class MultiPicModule { }
