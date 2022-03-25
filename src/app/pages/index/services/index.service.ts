import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subscriber } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { ResultBase } from "src/app/services/models/result.base";
import { BaseService } from "src/app/services/base.service";
import { ResultPlano } from "../models/planos/ResultPlano";

@Injectable()
export class IndexService extends BaseService {

  constructor(private http: HttpClient)  { super() }

    ListLojas(): Observable<ResultBase> {
      return this.http
            .get<ResultBase>("http://localhost:48518/api/v1/LojaFront", super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    ListPlanos(): Observable<ResultPlano> {
      return this.http
            .get<ResultPlano>("http://localhost:48518/api/v1/planos", super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}
