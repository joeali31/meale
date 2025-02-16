import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mealeCategories, mealeDetails, mealesname } from '../interfaces/meales';

@Injectable({
  providedIn: 'root'
})
export class MealesService {

  constructor(private _HttpClient:HttpClient) { }

  getAllCategories():Observable<mealeCategories>
  {
    return this._HttpClient.get<mealeCategories>(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
  }

  getAllMealesByCategories(categorie: string):Observable<any>
  {
    if (categorie == "all") {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    }
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
    
  }

  getMealeDetails( mealeid:string ):Observable<mealeDetails>
  {
    return this._HttpClient.get<mealeDetails>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealeid}`)
  }

  

}
