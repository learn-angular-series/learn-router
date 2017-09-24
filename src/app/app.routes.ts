import { RouterModule, CanLoad, CanActivate } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LeftNavComponent } from './home/left-nav/left-nav.component';
import { MainAreaComponent } from './home/main-area/main-area.component';

export const appRoutes=[
    {
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
    {
        path:'home',
		component:HomeComponent,
		children: [
            {
                path: 'leftNav',
                component: LeftNavComponent,
                outlet: 'left-nav'
            },
            {
                path: ':id',
                component: MainAreaComponent,
                outlet: 'main-area'
            }
        ]
    },
    {
		path:'**',
		component:HomeComponent
	}
];
