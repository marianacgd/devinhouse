import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})
export class StarwarsComponent {
  @Input() public lista: any[] = [];

}
