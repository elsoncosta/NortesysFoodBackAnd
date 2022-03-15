import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from 'src/app/pages/index/index.component';
import { MainLayoutRoutes } from './main-layout.routing';
// import { ClipboardModule } from 'ngx-clipboard';

// import { AdminLayoutRoutes } from './admin-layout.routing';
// import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MainLayoutRoutes),
    HttpClientModule,
    // ClipboardModule,
  ],
  declarations: [
    IndexComponent,
  ],
  providers: [],
  exports: []
})

export class MainLayoutModule {}
