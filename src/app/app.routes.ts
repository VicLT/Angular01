import { Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'galeria', component: GaleriaComponent },
    { path: '**', redirectTo: '' }
];
