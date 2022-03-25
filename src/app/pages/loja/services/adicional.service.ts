import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subscriber } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BaseService } from "src/app/services/base.service";
import { ResultAdiconalProduto } from "src/app/pages/loja/models/result.adicional.produto";
import { ResultAdicional } from "../models/result.adicional";

@Injectable()
export class AdicionalService extends BaseService {

  constructor(private http: HttpClient)  { super() }

    GetAdicionalProdutoList(idLoja: string, idProduto: string): Observable<ResultAdiconalProduto> {
      var paramters = `Idloja=${idLoja}&idProduto=${idProduto}`
      return this.http
            .get<ResultAdiconalProduto>("http://localhost:48518/api/v1/produto/AdicionaisProduto?" + paramters, super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    GetAdicionalList(idLoja: string, idProduto: string): Observable<ResultAdicional> {
      var paramters = `Idloja=${idLoja}&idProduto=${idProduto}`
      return this.http
            .get<ResultAdicional>("http://localhost:48518/api/v1/produto/AdicionaList?" + paramters, super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}
