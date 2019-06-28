import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureComponent } from './picture.component';

export const pictureRoutes:Routes=[
	{
		path:'',
		component:PictureComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(pictureRoutes)],
	exports: [RouterModule]
})
export class PictureRoutingModule { }