import { Component, inject, OnInit } from '@angular/core';
import {TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{

  constructor(private translate: TranslateService) {
    if (typeof window !== 'undefined' && window.localStorage) {
      const lang = localStorage.getItem('lang') || 'en';
      this.translate.use(lang);
    } else {
      // Définit une langue par défaut si localStorage n'est pas disponible
      this.translate.use('en');
    }
  }
  

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  ngOnInit(): void {
    
  }

}
