import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private modalService: NgbModal) {
  }
  // ngOnInit(): void {
  //   this.loadJsFile("assets/js/common_scripts.min.js" );
  //   this.loadJsFile("assets/js/common_func.js" );
  //   this.loadJsFile("assets/assets/validate.js");
  // }

  // public  loadJsFile(url: string) {
  //   let node = document.createElement( 'script' );
  //   node.src = url;
  //   node.type =  'texto/javascript' ;
  //   document.getElementsByTagName( 'head' )[0].appendChild(node);
  // }

  // openModal(produto: string) {
  //   const modalRef = this.modalService.open(MyBootstrapModalComponent,
  //     {
  //       scrollable: true,
  //       windowClass: 'myCustomModalClass',
  //       // keyboard: false,
  //       // backdrop: 'static'
  //     });

  //   let data = {
  //     prop1: 'Some Data',
  //     prop2: 'From Parent Component',
  //     prop3: 'This Can be anything',
  //     prop4: produto,
  //     prop5: 'nao funciona'
  //   }

  //   modalRef.componentInstance.fromParent = data;
  //   modalRef.result.then((result) => {
  //     console.log(result);
  //   }, (reason) => {
  //   });
  // }
}
