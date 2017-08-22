import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { MyPreloadingStrategy } from './common/my-preloading-strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy:MyPreloadingStrategy})
  ],
  providers: [MyPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
