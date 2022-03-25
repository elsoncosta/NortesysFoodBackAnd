import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subscriber } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { ResultBase } from "src/app/services/models/result.base";
import { BaseService } from "src/app/services/base.service";
import { ResultLoja } from "../models/result.loja";
import { ResultProdutos } from "src/app/services/models/produtos/result.produtos";

@Injectable()
export class ProdutoService extends BaseService {

  constructor(private http: HttpClient)  { super() }

    ListProdutos(idLoja: string): Observable<ResultProdutos> {
      return this.http
            .get<ResultProdutos>("http://localhost:48518/api/v1/produto/porLoja/" + idLoja, super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}
