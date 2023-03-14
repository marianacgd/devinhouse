import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-personagem',
  templateUrl: './card-personagem.component.html',
  styleUrls: ['./card-personagem.component.scss'],
})
export class CardPersonagemComponent implements OnInit {
  @Input() personagem: any;

  constructor() {}

  ngOnInit(): void {}
}
