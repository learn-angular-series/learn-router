import { RouterModule, CanDeactivate } from '@angular/router';
import { JokesComponent } from './jokes.component';
import { JokesGuard } from './jokes-guard';

export const jokesRoutes=[
    {
		path:'',
        component:JokesComponent,
        canDeactivate:[JokesGuard]
	}
];