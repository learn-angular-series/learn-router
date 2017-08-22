import { RouterModule, CanLoad, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes=[
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
        canLoad:[AuthGuard],
        canActivate:[AuthGuard],
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
