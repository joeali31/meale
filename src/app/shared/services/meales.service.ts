import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mealeCategories } from '../interfaces/meales';

@Injectable({
  providedIn: 'root'
})
export class MealesService {

  constructor(private _HttpClient:HttpClient) { }

  getAllCategories():Observable<mealeCategories>
  {
    return this._HttpClient.get<mealeCategories>(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
  }

}
