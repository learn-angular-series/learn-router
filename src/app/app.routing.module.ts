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
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
    },
    {
        path:'jokes',
        loadChildren: () => import("./jokes/jokes.module").then(m => m.JokesModule)
    },
    {
		path:'**',
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }