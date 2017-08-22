import { RouterModule, CanActivateChild } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { MsgListComponent } from './msg-list/msg-list.component';
import { MsgComponent } from './msg.component';

export const msgRoutes = [
    {
        path: '',
        component: MsgComponent,
        children: [
            { path: '', component: UserListComponent },
            { path: 'user', component: MsgListComponent, outlet: 'msglist' }
        ]
    }
];