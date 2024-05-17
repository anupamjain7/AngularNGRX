import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideClientHydration } from '@angular/platform-browser';
import { reducers, metaReducers} from './reducers'
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideClientHydration(),
    provideStore(reducers, {metaReducers})
  ]
};
