import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultLoja } from 'src/app/pages/loja/models/result.loja';
import { LojaService } from 'src/app/pages/loja/services/loja.service';
import { Loja } from 'src/app/services/models/loja.base';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-footer-loja',
  templateUrl: './footer-loja.component.html',
  styleUrls: ['./footer-loja.component.css']
})
export class FooterLojaComponent implements OnInit {

  public loja!: Loja;
  public pathLoja!: string;
  localStorageUtils = new LocalStorageUtils();
  errorMessage!: string;

  constructor(private router: Router,
    private service: LojaService) {
      this.pathLoja = this.router.url.split('/home').shift()?.replace('/', '') as string;
      this.getLojaForNick(this.pathLoja);
   }

  ngOnInit(): void {

  }

  getLojaForNick(id: string): void {
    this.service.GetLojaForNick(this.pathLoja)
    .subscribe((result: ResultLoja) => {
      this.loja = result.data;
      this.localStorageUtils.setLoja(this.loja);
    }, error => this.errorMessage);
  }

}
