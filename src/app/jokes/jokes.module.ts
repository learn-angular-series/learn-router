import { NgModule } from '@angular/core';
import { JokesComponent } from './jokes.component';
import { JokesRoutingModule } from './jokes.routing.module';

@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    JokesRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class JokesModule { }
