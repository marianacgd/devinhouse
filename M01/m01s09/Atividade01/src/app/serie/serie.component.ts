import { Component } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent {
  public lista = [
    { nome: 'Filme1', duracao: '90min' },
    { nome: 'Filme2', duracao: '120min' },
    { nome: 'Filme3', duracao: '100min' },
  ];
}
