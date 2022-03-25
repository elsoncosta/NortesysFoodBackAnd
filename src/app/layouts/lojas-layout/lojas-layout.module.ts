import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { LojaComponent } from 'src/app/pages/loja/loja.component';

import { LojaService } from 'src/app/pages/loja/services/loja.service';
import { ProdutoService } from 'src/app/pages/loja/services/produto.service';
import { CategoriaService } from 'src/app/pages/loja/services/categoria.service';

import { DragScrollModule } from 'ngx-drag-scroll';
import { LojasLayoutRoutes } from './lojas-layout.routing';
import { ModalProdutoComponent } from 'src/app/components/modal-produto/modal-produto.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LojasLayoutRoutes),
    HttpClientModule,
    ClipboardModule,
    DragScrollModule,
    ReactiveFormsModule
  ],
  declarations: [
    LojaComponent,
    ModalProdutoComponent
  ],
  providers: [LojaService, ProdutoService, CategoriaService],
  exports: []
})

export class LojasLayoutModule {}
