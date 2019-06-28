import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JokesComponent} from './jokes/jokes.component';

export const appRoutes:Routes=[
    {
		path:'',
		redirectTo:'home/1',
		pathMatch:'full'
	},
    {
        path:'home/:page',
        component:HomeComponent
    },
    {
        path:'jokes',
        component:JokesComponent
    },
    {
		path:'**',
		component:HomeComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }