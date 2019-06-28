import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesComponent } from './jokes.component';
import { JokesGuard } from './jokes-guard';

export const jokesRoutes:Routes=[
	{
		path:'',
		component:JokesComponent,
		canDeactivate:[JokesGuard]
	}
];
@NgModule({
	imports: [RouterModule.forChild(jokesRoutes)],
	exports: [RouterModule]
})
export class JokesRoutingModule { }