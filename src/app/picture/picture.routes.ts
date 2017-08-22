import { RouterModule, CanActivateChild } from '@angular/router';
import { PictureComponent } from './picture.component';
import { AuthGuard } from '../auth/auth.guard';
import { GifComponent } from './gif/gif.component';
import { JpgComponent } from './jpg/jpg.component';

export const pictureRoutes=[
    {
		path:'',
        component:PictureComponent,
        canActivateChild:[AuthGuard],
        children:[
            {path:'',redirectTo:'jpg',pathMatch:'full'},
            {path:'jpg',component:JpgComponent},
            {path:'gif',component:GifComponent}
        ]
	}
];