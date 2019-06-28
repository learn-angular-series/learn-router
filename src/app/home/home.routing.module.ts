import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';

export const homeRoutes:Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'pictures',
                pathMatch: 'full'
            },
            {
                path: 'pictures',
                component: PictureComponent
            },
            {
                path: 'text',
                component: TextComponent
            },
            {
                path: '**',
                component: PictureComponent
            }
        ]
    }
];

@NgModule({
	imports: [RouterModule.forChild(homeRoutes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }