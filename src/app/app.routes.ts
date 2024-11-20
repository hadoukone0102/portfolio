import { Routes } from '@angular/router';
import { AccueilComponent } from './cores/components/accueil/accueil.component';

export const routes: Routes = [


    /************************ ROUTE POUR LA PAGE D'ACCUEIL **************************/
    { path: "accueil" , component:AccueilComponent },
    { path:"" , redirectTo:"accueil" , pathMatch:"full" },
    
];
