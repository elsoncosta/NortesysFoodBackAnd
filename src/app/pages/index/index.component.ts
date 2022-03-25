import { Component, OnInit } from '@angular/core';
import { Loja } from 'src/app/services/models/loja.base';
import { ResultBase } from 'src/app/services/models/result.base';
import { Plano } from './models/planos/Plano';
import { ResultPlano } from './models/planos/ResultPlano';
import { IndexService } from './services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public lojas!: Loja[];
  public lojas2!: Loja[];
  public plano!: Plano;
  errorMessage!: string;
  result!: ResultBase;

  constructor(private service: IndexService) {

    this.service.ListLojas()
        .subscribe((result: ResultBase) => {
          this.lojas = result.data;
          this.lojas2 =  this.lojas.splice(this.lojas.length/2);
        }, error => this.errorMessage);

        this.service.ListPlanos()
        .subscribe((result: ResultPlano) => {
          this.plano = result.data;
        }, error => this.errorMessage);
  }

  ngOnInit(): void {
    console.log("passou");
    // this.loadJsFile("assets/js/common_scripts.min.js;" );
    // this.loadJsFile("assets/js/common_func.js" );
    // this.loadJsFile("assets/assets/validate.js");
  }

  // public  loadJsFile(url: string) {
  //   let node = document.createElement( 'script' );
  //   node.src = url;
  //   node.type =  'texto/javascript' ;
  //   document.getElementsByTagName( 'head' )[0].appendChild(node);
  // }
}
