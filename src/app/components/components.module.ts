import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterLojaComponent } from './footer-loja/footer-loja.component';
import { HeaderLojaComponent } from './header-loja/header-loja.component';
import { BannerLojaComponent } from './banner-loja/banner-loja.component';
import { LojaService } from '../pages/loja/services/loja.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    FooterLojaComponent,
    HeaderLojaComponent,
    BannerLojaComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    FooterLojaComponent,
    HeaderLojaComponent,
    BannerLojaComponent,

  ],
  providers:[
    LojaService
  ]
})
export class ComponentsModule { }
