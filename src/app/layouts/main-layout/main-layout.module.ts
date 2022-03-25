import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutRoutes } from './main-layout.routing';
import { ClipboardModule } from 'ngx-clipboard';

import { IndexService } from 'src/app/pages/index/services/index.service';

import { IndexComponent } from 'src/app/pages/index/index.component';

import { DragScrollModule } from 'ngx-drag-scroll';
import { TesteComponent } from 'src/app/pages/teste/teste.component';

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
    ClipboardModule,
    DragScrollModule,
  ],
  declarations: [
    IndexComponent,
    TesteComponent
  ],
  providers: [IndexService],
  exports: []
})

export class MainLayoutModule {}
