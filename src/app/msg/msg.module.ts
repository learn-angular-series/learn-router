import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MsgComponent } from './msg.component';
import { UserListComponent } from './user-list/user-list.component';
import { MsgListComponent } from './msg-list/msg-list.component';
import { msgRoutes } from './msg.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(msgRoutes)
  ],
  declarations: [MsgComponent, UserListComponent, MsgListComponent]
})
export class MsgModule { }
