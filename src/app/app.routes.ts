import { Routes } from '@angular/router';
import { MealeslayoutComponent } from './layout/mealeslayout/mealeslayout.component';
import { MealesComponent } from './layout/meales/meales.component';
import { MealeDetailsComponent } from './layout/meale-details/meale-details.component';

export const routes: Routes = [
    {path:'' , component: MealeslayoutComponent , children:[
        {
            path:'',
            redirectTo: 'category/all',
            pathMatch: 'full'
        },
        {
        path:'category/:categoryname',
        component: MealesComponent
    },
    {
        path:'mealdetails/:mealid',
        component: MealeDetailsComponent
    }
]}
];
