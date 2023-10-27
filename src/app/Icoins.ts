export interface Icoins
{
        rank:number,
        name:string,
        symbol:string,
        priceUsd:number,
        supply:number,
        maxSupply:number,
        explorer:string,
}

export interface IcoinsData {
    data: Icoins[];
    timestamp: number;
  }