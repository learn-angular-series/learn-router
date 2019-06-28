import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes:Routes=[
    {
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
    {
        path:'home',
        loadChildren:'./home/home.module#HomeModule'
    },
    {
        path:'jokes',
        loadChildren:'./jokes/jokes.module#JokesModule'
    },
    {
		path:'**',
		loadChildren:'./home/home.module#HomeModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
