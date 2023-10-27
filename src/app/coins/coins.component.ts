import { Component } from '@angular/core';
import { CoinsService } from '../coins.service';
import { Icoins, IcoinsData } from '../Icoins';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent {

  constructor(private service:CoinsService){}

  coins:Icoins[] = [];
  coinParent:Icoins | undefined;
  search:string = '';

  ngOnInit(): void {
    return this.getCoins();
  }

  getCoins()
  {
    this.service.fetchAll().subscribe((data: IcoinsData) => {
      this.coins = data.data;
    });
  }

  selectedCoin(coin:Icoins)
  {
    this.coinParent = coin;
  }

}
