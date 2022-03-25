import { Component, OnInit } from '@angular/core';
import { Loja } from 'src/app/services/models/loja.base';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-banner-loja',
  templateUrl: './banner-loja.component.html',
  styleUrls: ['./banner-loja.component.css']
})
export class BannerLojaComponent implements OnInit {

  public loja!: Loja;
  localStorageUtils = new LocalStorageUtils();

  constructor() { }

  ngOnInit(): void {
    this.loja = this.localStorageUtils.getLoja();
  }


}
