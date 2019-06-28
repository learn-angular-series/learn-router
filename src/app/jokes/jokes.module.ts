import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JokesComponent } from './jokes.component';
import { JokesGuard } from './jokes-guard';
import { JokesRoutingModule } from './jokes.routing.module';

@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    FormsModule,
    JokesRoutingModule
  ],
  providers: [JokesGuard],
  bootstrap: []
})
export class JokesModule { }
