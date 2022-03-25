import { Loja } from "../services/models/loja.base";

export class LocalStorageUtils {

  public obterUsuario() {
      return JSON.parse(localStorage.getItem('nts.user')!);
  }

  public salvarDadosLocaisUsuario(response: any) {
      this.salvarTokenUsuario(response.accessToken);
      this.salvarUsuario(response.userToken);
  }

  public limparDadosLocaisUsuario() {
      localStorage.removeItem('nts.token');
      localStorage.removeItem('nts.user');
  }

  public obterTokenUsuario(): string {
      return localStorage.getItem('nts.token')!;
  }

  public obterNomeUsuario(): string {
      let data = JSON.parse(localStorage.getItem("nts.user")!);
      if(data==null)
          return "";

      for(let index in data.claims)
      {
          if(data.claims[index].type== 'email')
          {
              return data.claims[index].value;
          }
      }

      return "";
  }

  public setLoja(loja: Loja) {
    localStorage.setItem('nts.loja', JSON.stringify(loja));
  }

  public getLoja() : Loja {
    return JSON.parse(localStorage.getItem('nts.loja')!);
  }

  public salvarTokenUsuario(token: string) {
      localStorage.setItem('nts.token', token);
  }

  public salvarUsuario(user: string) {
      localStorage.setItem('nts.user', JSON.stringify(user));
  }

}
