import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JokesComponent } from './jokes.component';
import { JokesGuard } from './jokes-guard';
import { jokesRoutes } from './jokes.routes';

@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(jokesRoutes)
  ],
  providers: [JokesGuard],
  bootstrap: []
})
export class JokesModule { }
