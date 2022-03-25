import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbCheckBox } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/services/models/produtos/produto';
import { Imagen } from 'src/app/services/models/produtos/imagen';
import { AdicionalService } from 'src/app/pages/loja/services/adicional.service';
import { Adicional } from 'src/app/services/models/adicionais/Adicional';
import { AdicionalProduto } from 'src/app/services/models/adicionais/adicional.produto';
import { ResultAdiconalProduto } from 'src/app/pages/loja/models/result.adicional.produto';
import { ResultAdicional } from 'src/app/pages/loja/models/result.adicional';
import { Router } from '@angular/router';
import { SomaService } from 'src/app/pages/loja/services/soma.service';
import { ResultSoma } from 'src/app/pages/loja/models/result.soma';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css']
})
export class ModalProdutoComponent implements OnInit {
  closeResult = '';
  public pathLink!: string;
  errorMessage!: string;

  @Input() produto!: Produto;
  @Input() titulo!: string;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  public listAdicionalProduto!: AdicionalProduto[];
  public listAdicional!: Adicional[];
  public valorTotalPedido!: number;
  public valorTotalPedidoTemp!: number;
  public quantidade: number = 1;

  form: FormGroup;


   constructor(private router: Router,
                public activeModal: NgbActiveModal,
                private service: AdicionalService,
                private serviceSoma: SomaService,
                private toastr: ToastrService,
                fb: FormBuilder) {
                this.pathLink = router.url;

                // this.form = fb.group({
                //   selectedCountries:  new FormArray([])
                //  });

                 this.form = fb.group({
                    quantidade: 1,
                    selectedCountries:  new FormArray([])
                });

               }


  ngOnInit(): void {
    console.log(this.produto.nome);
    console.log(this.produto.id);
    console.log(this.produto.idLoja);
    this.valorTotalPedido = this.produto.preco;
    this.getAdicionalais();
  }

  getAdicionalais(): void {
    if(this.produto!=null)
    {
      this.service.GetAdicionalProdutoList(this.produto.idLoja, this.produto.id)
            .subscribe((result: ResultAdiconalProduto) => {
              this.listAdicionalProduto = result.data;
            }, error => this.errorMessage);

      this.service.GetAdicionalList(this.produto.idLoja, this.produto.id)
            .subscribe((result: ResultAdicional) => {
              this.listAdicional = result.data;
              if(this.listAdicional.length>0)
              {
                this.listAdicional[0].ativeTab=true;
                this.listAdicional[0].ativeTabTop='show'
                this.listAdicional[0].ativeTabBotton='show active'
              }
            }, error => this.errorMessage);
    }
  }

  passBack() {
    this.passEntry.emit(this.produto);
    this.activeModal.close(this.produto);
  }


  public GetAdicional(id: string) : Adicional | null
  {
      let adicional = this.listAdicional.find(r=> r.id == id);
      if(adicional!=null)
      {
        return adicional;
      }
      return null;
  }

  SalvarPedido(): void {
    this.passEntry.emit(this.produto);
    this.activeModal.dismiss();
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

    onCheckboxChange(event: any) {
      const selectedCountries = (this.form.controls.selectedCountries as FormArray);
      if (event.target.checked) {
        selectedCountries.push(new FormControl(event.target.value));
      } else {
        const index = selectedCountries.controls
        .findIndex(x => x.value === event.target.value);
        selectedCountries.removeAt(index);
      }

      let adicional = this.listAdicional.find(r=> r.id == event.target.name);
      let produto = this.listAdicionalProduto.find(r=> r.id == event.target.value);
      if(produto!=null)
      {
        produto.isChecked = event.target.checked;
      }

      let produtoAdd = this.listAdicionalProduto.filter(r=> r.adicionalGrupo.idAdicional == adicional?.id && r.isChecked);
      if(adicional!=null && produtoAdd.length>adicional.quantidadeMaxima)
      {
        this.toastr.info(`Selecione apenas ${adicional.quantidadeMaxima} para essa categoria.`);
        event.target.checked = false;
        const index = selectedCountries.controls
        .findIndex(x => x.value === event.target.value);
        selectedCountries.removeAt(index);
        if(produto!=null)
        {
          produto.isChecked = event.target.checked;
        }
      }

      produtoAdd = this.listAdicionalProduto.filter(r=> adicional?.id && r.isChecked);

      let ids: string[] = [];

      produtoAdd.forEach(r => {
        ids.push(r.id);
      });

      this.serviceSoma.SomaProdutos(this.produto.idLoja, ids)
          .subscribe((result: ResultSoma) => {
            this.valorTotalPedido = result.data as unknown as number;
            this.valorTotalPedidoTemp = this.valorTotalPedido;
          }, error => this.errorMessage);

          this.quantidade = 1;
    }

    AddMaisProdutoOnclick()
    {
        let quantidade = Number(this.form.get('quantidade')?.value);
        this.quantidade = quantidade == 0 ? 1 : quantidade;
        this.quantidade = this.quantidade + 1;
        this.valorTotalPedido = this.valorTotalPedidoTemp * this.quantidade;
        this.form.patchValue({quantidade: this.quantidade});
    }

    AddMenosProdutoOnclick()
    {
        let quantidade = Number(this.form.get('quantidade')?.value);
        this.quantidade = quantidade == 0 ? 1 : quantidade;
        this.quantidade = this.quantidade == 1 ? this.quantidade : (this.quantidade - 1);
        this.valorTotalPedido = this.valorTotalPedidoTemp * this.quantidade;
        this.form.patchValue({quantidade: this.quantidade});
    }

    onQuantidadeKeypress(event: any)
    {
        let quantidade = Number(event.target.value);
        this.quantidade = quantidade == 0 ? 1 : quantidade;
        this.valorTotalPedido = this.valorTotalPedidoTemp * this.quantidade;
        console.log(this.quantidade);
        console.log(this.valorTotalPedido);
    }

}
