import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

    /* flags pour le loader */
    public loading = true;
    public loaderFadeOut = false;

    /* function pour changer les valeurs des flags du loader */
  LoaderFlag(flag: string, value: boolean): void {
    if (flag === 'loading') this.loading = value;
    else if (flag === 'loaderFadeOut') this.loaderFadeOut = value;
  }
}
