import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subscriber } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { ResultBase } from "src/app/services/models/result.base";
import { BaseService } from "src/app/services/base.service";
import { ResultLoja } from "../models/result.loja";
import { ResultProdutos } from "src/app/services/models/produtos/result.produtos";
import { ResultCategorias } from "src/app/services/models/categorias/result.categorias";

@Injectable()
export class CategoriaService extends BaseService {

  constructor(private http: HttpClient)  { super() }

    List(id: string): Observable<ResultCategorias> {
      return this.http
            .get<ResultCategorias>("http://localhost:48518/api/v1/categoria/porLoja/" + id, super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}
