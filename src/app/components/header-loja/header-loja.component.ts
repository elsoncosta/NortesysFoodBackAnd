import { Component, OnInit } from '@angular/core';
import { Loja } from 'src/app/services/models/loja.base';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-header-loja',
  templateUrl: './header-loja.component.html',
  styleUrls: ['./header-loja.component.css']
})
export class HeaderLojaComponent implements OnInit {

  public loja!: Loja;
  localStorageUtils = new LocalStorageUtils();

  constructor() { }

  ngOnInit(): void {
    this.loja = this.localStorageUtils.getLoja();
  }

}
