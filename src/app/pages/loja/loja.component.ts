import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProdutoComponent } from 'src/app/components/modal-produto/modal-produto.component';
import { Categoria } from 'src/app/services/models/categorias/categoria';
import { ResultCategorias } from 'src/app/services/models/categorias/result.categorias';
import { Loja } from 'src/app/services/models/loja.base';
import { Imagen } from 'src/app/services/models/produtos/imagen';
import { Produto } from 'src/app/services/models/produtos/produto';
import { ResultProdutos } from 'src/app/services/models/produtos/result.produtos';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { CategoriaService } from './services/categoria.service';
import { ProdutoService } from './services/produto.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'],
})
export class LojaComponent implements OnInit {

  public loja!: Loja;
  public pathLoja!: string;
  public listProdutos!: Produto[];
  public listCategoria!: Categoria[];
  errorMessage!: string;
  localStorageUtils = new LocalStorageUtils();

  modalCloseResult: string | undefined;


  acaoPrimaria() {
    console.log('Ação primária');
  }

  constructor(private serviceProduto: ProdutoService,
    private serviceCategoria: CategoriaService,
    private modalService: NgbModal) {
  }

  openModal(produto: Produto) {
    const modalRef = this.modalService.open(ModalProdutoComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });

    modalRef.componentInstance.produto = produto;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });

    // modalRef.componentInstance.passEntry.subscribe((data: any) => {
    //   this.modalCloseResult = data;
    //   console.log(data);
    // });

    // modalRef.componentInstance.setLoja(produto);

    // modalRef.result.then((result) => {
    //   if (result) {
    //     console.log(result);
    //   }
    // });
  }

  ngOnInit(): void {
    this.loja = this.localStorageUtils.getLoja();

    this.getProdutos(this.loja);

    this.getCategorias(this.loja);
  }

  // getLojaForNick(id: string): void {
  //   this.service.GetLojaForNick(this.pathLoja)
  //   .subscribe((result: ResultLoja) => {
  //     this.loja = result.data;
  //     this.getProdutos(this.loja.id);
  //     this.getCategorias(this.loja.id);
  //   }, error => this.errorMessage);
  // }

    getProdutos(loja: Loja): void {
      if(loja!=null)
      {
        this.serviceProduto.ListProdutos(loja.id)
        .subscribe((result: ResultProdutos) => {
          this.listProdutos = result.data;
        }, error => this.errorMessage);
      }
    }

    getCategorias(loja: Loja): void {
      if(loja!=null)
      {
        this.serviceCategoria.List(loja.id)
              .subscribe((result: ResultCategorias) => {
                this.listCategoria = result.data;
              }, error => this.errorMessage);
      }
    }

    public getImagem(imgs: Imagen[]) : string
    {
      let imagem = imgs.find(r=>r.favorito===true || r.favorito===false);
      if(imagem!=null || imagem != undefined)
      {
        return imagem.urlImgTemp;
      }
      else
      {
        return '';
      }
    }
}

