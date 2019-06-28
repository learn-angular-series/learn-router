import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes:Routes=[
    {
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
    {
        path:'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path:'jokes',
        data:{preload:true},
        canLoad:[AuthGuard],
        canActivate:[AuthGuard],
        loadChildren: () => import('./jokes/jokes.module').then(m => m.JokesModule)
    },
    {
        path:'picture',
        data:{preload:false},
        loadChildren: () => import('./picture/picture.module').then(m => m.PictureModule)
    },
    {
		path:'**',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }