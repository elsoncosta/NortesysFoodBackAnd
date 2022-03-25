import { Routes } from '@angular/router';
import { LojaComponent } from 'src/app/pages/loja/loja.component';
import { TesteComponent } from 'src/app/pages/teste/teste.component';


export const LojasLayoutRoutes: Routes = [
    {path: ':loja/home', component: LojaComponent},
    {path: ':loja/teste', component: TesteComponent}
  ];
