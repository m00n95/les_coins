import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IcoinsData } from './Icoins';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http:HttpClient) { }

  url = "https://api.coincap.io/v2/assets";

  fetchAll(): Observable<IcoinsData> 
  {
    return this.http.get<any>(this.url).pipe(map((data) => data as IcoinsData));
  }
}
