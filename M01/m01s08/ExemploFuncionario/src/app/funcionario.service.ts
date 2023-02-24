import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private url = 'http://localhost:3000/funcionarios';

  constructor(private _httpCliente: HttpClient) { }

  public getFuncionarios(): Observable<Funcionario[]> {
    return this._httpCliente.get<Funcionario[]>(this.url);
  }
}
