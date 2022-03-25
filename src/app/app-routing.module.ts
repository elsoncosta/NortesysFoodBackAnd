import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { LojasLayoutComponent } from './layouts/lojas-layout/lojas-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes =[
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  // {path: 'teste', component: TesteComponent},
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/main-layout/main-layout.module').then(m => m.MainLayoutModule)
      }
    ]
  },
  {
    path: '',
    component: LojasLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/lojas-layout/lojas-layout.module').then(m => m.LojasLayoutModule)
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    FormsModule,
    RouterModule.forRoot(routes,{useHash: true})
  ],
  exports: []
})
export class AppRoutingModule { }
