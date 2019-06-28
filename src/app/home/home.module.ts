import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    PictureComponent,
    TextComponent
  ],
  imports: [
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
