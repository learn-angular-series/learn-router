import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }