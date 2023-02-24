import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarAlunosService {

  public aluno1: string[] = ["Pamylla",'31',`Dev`];
  public aluno2: string[] = ["Mariana",'30',`Dev`];
  public aluno3: string[] = ["Carlos",'32',`Dev`];
  
  constructor() { }

  public getAluno1():string[]{
    return this.aluno1;
  }
  public getAluno2():string[]{
    return this.aluno2;
  }
  public getAluno3():string[]{
    return this.aluno3;
  }
}
