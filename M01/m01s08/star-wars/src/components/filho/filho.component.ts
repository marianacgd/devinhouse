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
  @Input() public infos = '';

  public fotoLuke = 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/12/luke-star-wars.jpg'
  public tituloLuke = 'Luke Skywalker'
  public textoLuke = '"Eu lutei as piores das guerras, e testemunhei a redenção do mal. Eu vi o equilíbrio ser restaurado à Força. Mas a ordem pode se tornar o caos… como aconteceu quando eu nasci. Agora, com aqueles que amo e meus leais aliados, enfrento um novo desafio como nenhum outro antes. E não tenho certeza se desta vez podemos vencer."'
  public infosLuke = 'Humano, Masculino, 1.72'
}
