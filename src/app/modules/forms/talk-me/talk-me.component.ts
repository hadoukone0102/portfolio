import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-talk-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './talk-me.component.html',
  styleUrl: './talk-me.component.scss'
})
export class TalkMeComponent implements OnInit{

  constructor(private translate: TranslateService) {
    if (typeof window !== 'undefined' && window.localStorage) {
      const lang = localStorage.getItem('lang') || 'en';
      this.translate.use(lang);
      this.currentLanguage = lang;
    } else {
      // Définit une langue par défaut si localStorage n'est pas disponible
      this.translate.use('en');
    }
  }
  
  currentLanguage: string = 'en';
  menuActive: boolean = false;

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.currentLanguage = lang;
  }

  
  ngOnInit(): void {
    
  }

  toggleMenu(): void {
    const headerSecond = document.querySelector('.header-second') as HTMLElement;
    headerSecond.classList.toggle('active');
  }
}
