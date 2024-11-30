import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoaderService } from './cores/services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  private isFirstLoad = true; // Indicateur pour le premier chargement

  constructor(public loaderService: LoaderService, private router: Router) {}

  ngOnInit(): void {
    this.executeLoaderActions(); // Exécution lors du premier chargement

    // Exécution pour les changements de route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!this.isFirstLoad) {
          this.executeLoaderActions();
        }
        this.isFirstLoad = false; // Désactiver le flag après le premier chargement
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
