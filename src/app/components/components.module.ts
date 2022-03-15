import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NotFoundComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NotFoundComponent,
  ]
})
export class ComponentsModule { }
