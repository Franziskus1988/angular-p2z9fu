import { Inject, Injectable, InjectionToken } from '@angular/core';

export type Loaders = () => {};

export const APP_LOADER = new InjectionToken<Loaders>('APP_LOADER');

@Injectable({
  providedIn: 'root',
})
export class AppLoader {
  constructor(@Inject(APP_LOADER) private readonly appLoaders: Loaders[]) {
    console.log('AppLoader');
    console.log('AppLoaders number:', this.appLoaders.length);
  }

  init() {
    this.appLoaders.forEach((cb) => cb());
  }
}
