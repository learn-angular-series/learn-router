import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesComponent } from './jokes.component';

export const jokesRoutes:Routes=[
    {
		path:'',
        component:JokesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(jokesRoutes)],
	exports: [RouterModule]
})
export class JokesRoutingModule { }