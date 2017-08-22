import { RouterModule, CanActivateChild } from '@angular/router';
import { Gif2Component } from './gif2/gif2.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

export const multiPictureRoutes=[
    {
		path:'',
        component:LeftNavComponent
    },
    {
        path:'pic',
        component:Gif2Component,
        outlet:'second-outlet'
    }
];