import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

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
        data:{preload:true},
        loadChildren:'./jokes/jokes.module#JokesModule'
    },
    {
        path:'picture',
        data:{preload:false},
        loadChildren:'./picture/picture.module#PictureModule'
    },
    {
		path:'**',
		loadChildren:'./home/home.module#HomeModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
	exports: [RouterModule]
})
export class AppRoutingModule { }