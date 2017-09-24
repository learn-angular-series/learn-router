import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { MyPreloadingStrategy } from './common/my-preloading-strategy';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
    // ,RouterModule.forRoot(appRoutes,{preloadingStrategy:MyPreloadingStrategy})
  ],
  providers: [MyPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
