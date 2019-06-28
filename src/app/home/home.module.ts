import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
