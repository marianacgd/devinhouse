import { Component, OnInit } from '@angular/core';
import { ListarAlunosService } from '../listar-alunos.service';


@Component({
  selector: 'app-consumindo-servico',
  templateUrl: './consumindo-servico.component.html',
  styleUrls: ['./consumindo-servico.component.css']
})
export class ConsumindoServicoComponent implements OnInit {

  public infoAluno1: string[] = [];
  public infoAluno2: string[] = [];
  public infoAluno3: string[] = [];

  constructor(private _service: ListarAlunosService){}

  ngOnInit(): void {
    this.getInfo1();
    this.getInfo2();
    this.getInfo3();
  }

  public getInfo1(): string[] {
    return this.infoAluno1 = this._service.getAluno1()
  }
  public getInfo2(): string[] {
    return this.infoAluno2 = this._service.getAluno2()
  }
  public getInfo3(): string[] {
    return this.infoAluno3 = this._service.getAluno3()
  }
}
