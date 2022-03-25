import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LojasLayoutComponent } from './layouts/lojas-layout/lojas-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdicionalService } from './pages/loja/services/adicional.service';
import { SomaService } from './pages/loja/services/soma.service';

// export function getBaseUrl() {
//   return document.getElementsByTagName('base')[0].href;
// }

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LojasLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    [RouterModule.forRoot(routes, {useHash: false})]
  ],
  providers: [
    AdicionalService,SomaService
    // { provide: 'BASE_URL', useFactory: getBaseUrl },
    // { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  exports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
