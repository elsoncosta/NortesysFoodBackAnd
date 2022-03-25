import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lojas-layout',
  templateUrl: './lojas-layout.component.html',
  // styleUrls: ['./lojas-layout.component.css']
})
export class LojasLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  acaoPrimaria() {
    console.log('Ação primária');
  }

}
