import { Component, Input } from '@angular/core';
import { Icoins } from '../Icoins';

@Component({
  selector: 'app-coins-modal',
  templateUrl: './coins-modal.component.html',
  styleUrls: ['./coins-modal.component.css']
})
export class CoinsModalComponent {

  @Input() coinChild:Icoins | undefined;

  ngOnInit(): void
  {
    console.log(this.coinChild);
  }

}
