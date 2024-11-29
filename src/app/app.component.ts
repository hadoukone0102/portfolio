import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoaderService } from './cores/services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  constructor(
    public loaderService :LoaderService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.executeLoaderActions();

     // Écoute les événements de navigation pour réexécuter les actions à chaque changement de route
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.executeLoaderActions();
      }
    });
  }

  private executeLoaderActions(): void {
    /* lance la disparition du loader */
    setTimeout(() => {
      this.loaderService.LoaderFlag('loaderFadeOut', true);
    }, 3500);

    /* désactive le loader */
    setTimeout(() => {
      this.loaderService.LoaderFlag('loading', false);
    }, 3900);

    /* lance l'apparition du contenu */
    setTimeout(() => {
      this.loaderService.LoaderFlag('preloading', true);
    }, 2000);
  }

}
