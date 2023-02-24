import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionario-json-server',
  templateUrl: './funcionario-json-server.component.html',
  styleUrls: ['./funcionario-json-server.component.css']
})
export class FuncionarioJsonServerComponent implements OnInit {

  public funcionarios: Funcionario[] = [];

  constructor(private _funcionarioService: FuncionarioService){}

  ngOnInit(): void{
    this._funcionarioService.getFuncionarios()
    .subscribe(
      retorno => {
        this.funcionarios = retorno.map(func => {
          return new Funcionario(
            func.id,
            func.nome,
            func.departamento
          )
        })
      }
    )
  }

}
