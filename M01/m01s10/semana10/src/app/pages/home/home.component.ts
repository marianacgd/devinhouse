import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  personagens = [
    {
      id: 1,
      nome: 'Luke Skywalker',
      imagem: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
      tipo: 'humano',
    },
    {
      id: 2,
      nome: 'C-3PO',
      imagem: 'https://starwars-visualguide.com/assets/img/characters/2.jpg',
      tipo: 'robo',
    },
    {
      id: 3,
      nome: 'Darth Vader',
      imagem: 'https://starwars-visualguide.com/assets/img/characters/4.jpg',
      tipo: 'humano',
    },
    {
      id: 4,
      nome: 'Leia Organa',
      imagem: 'https://starwars-visualguide.com/assets/img/characters/5.jpg',
      tipo: 'humano',
    },
    {
      id: 5,
      nome: 'R2-D2',
      imagem: 'https://starwars-visualguide.com/assets/img/characters/3.jpg',
      tipo: 'robo',
    },
    {
      id: 6,
      nome: 'Obi-Wan Kenobi',
      imagem: 'https://starwars-visualguide.com/assets/img/characters/10.jpg',
      tipo: 'humano',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
