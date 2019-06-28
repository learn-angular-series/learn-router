import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { JokesComponent } from './jokes.component';
import { JokesRoutingModule } from './jokes.routing.module';

@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    SharedModule,
    JokesRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class JokesModule { }
