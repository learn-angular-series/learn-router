import { Route,PreloadingStrategy } from '@angular/router';
import { Observable, of } from "rxjs";

export class MyPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any>{
        return route.data&&route.data.preload?fn():of(null);
    }
}