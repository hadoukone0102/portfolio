import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  currentLanguage = 'English'; // Par défaut en anglais

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en'; // Langue par défaut : anglais
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
    this.currentLanguage = savedLang === 'en' ? 'English' : 'Français';
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.currentLanguage = lang === 'en' ? 'English' : 'Français';
  }

  ngOnInit(): void {
    
  }

}
