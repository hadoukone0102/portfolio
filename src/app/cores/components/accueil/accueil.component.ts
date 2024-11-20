import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ContentPageComponent } from '../content-page/content-page.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent,ContentPageComponent,FooterComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
