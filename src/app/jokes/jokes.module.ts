import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { JokesComponent } from './jokes.component';
import { jokesRoutes } from './jokes.routes';

@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(jokesRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class JokesModule { }
