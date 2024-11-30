import { Routes } from '@angular/router';
import { AccueilComponent } from './cores/components/accueil/accueil.component';

export const routes: Routes = [

    /************************ ROUTE POUR LES FORMULAIRES **************************/
    {
        path:"Hadou@Forms",
        loadChildren: () => {
            return import('./modules/forms/forms.module').then((m) => m.FormsModule);
        }
    },


    /************************ ROUTE POUR LA PAGE D'ACCUEIL **************************/
    { path: "accueil" , component:AccueilComponent },
    { path:"" , redirectTo:"accueil" , pathMatch:"full" },
    
];
