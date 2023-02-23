import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {
  @Input() public foto = '';
  @Input() public titulo = '';
  @Input() public texto = '';

  public fotoLuke = 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/12/luke-star-wars.jpg'
  public tituloLuke = 'Luke Skywalker'
  public textoLuke = 'texto luke'

}
