import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subscriber } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from "src/app/services/base.service";
import { ResultLoja } from "../models/result.loja";
import { ResultSoma } from "../models/result.soma";

@Injectable()
export class SomaService extends BaseService {

  constructor(private http: HttpClient)  { super() }

    GetLojaForNick(nickLoja: string): Observable<ResultLoja> {
      return this.http
            .get<ResultLoja>("http://localhost:48518/api/v1/LojaFront/PorNick?nickLoja=" + nickLoja, super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    SomaProdutos(idLoja: string, IdsProduto: string[]): Observable<ResultSoma> {
      return this.http
            .post<ResultSoma>("http://localhost:48518/api/v1/Soma/SomaProdutos?idLoja=" + idLoja, IdsProduto, super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}
