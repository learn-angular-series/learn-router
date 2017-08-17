import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent    
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
