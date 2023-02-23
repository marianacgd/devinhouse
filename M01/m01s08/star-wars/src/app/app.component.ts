import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img = 'assets/leia.jpg';
  title = 'Star Wars - Leia';
  text = '"Ela tinha uma personalidade forte e grande intelecto, tendo realizado muito em sua juventude: ela foi um proponente importante para a Aliança Rebelde, a mais jovem Senadora do Império Galáctico com dezoito anos de idade, além de ser membra da Família Real de Alderaan. Anos depois, ela foi instrumental na criação da Nova República, sendo eleita para a posição de Chefe de Estado, servindo duas vezes nesse posto."';
  info = 'Humana, Feminino, 1.5'
}
