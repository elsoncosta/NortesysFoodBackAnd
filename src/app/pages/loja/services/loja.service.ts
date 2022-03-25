import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subscriber } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { ResultBase } from "src/app/services/models/result.base";
import { BaseService } from "src/app/services/base.service";
import { ResultLoja } from "../models/result.loja";

@Injectable()
export class LojaService extends BaseService {

  constructor(private http: HttpClient)  { super() }

    GetLojaForNick(nickLoja: string): Observable<ResultLoja> {
      return this.http
            .get<ResultLoja>("http://localhost:48518/api/v1/LojaFront/PorNick?nickLoja=" + nickLoja, super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}
