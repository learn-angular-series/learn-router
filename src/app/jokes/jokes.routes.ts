import { RouterModule, CanDeactivate } from '@angular/router';
import { JokesComponent } from './jokes.component';
import { JokeGuard } from './joke-guard';

export const jokesRoutes=[
    {
		path:'',
        component:JokesComponent,
        canDeactivate:[JokeGuard]
	}
];