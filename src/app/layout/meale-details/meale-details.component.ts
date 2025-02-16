import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealesService } from '../../shared/services/meales.service';
import { Mealspic } from '../../shared/interfaces/meales';

@Component({
  selector: 'app-meale-details',
  imports: [],
  templateUrl: './meale-details.component.html',
  styleUrl: './meale-details.component.scss'
})
export class MealeDetailsComponent implements OnInit {

  mealeDetailsById!:Mealspic

  constructor(private _ActivatedRoute:ActivatedRoute , private _MealesService:MealesService){}

  ngOnInit(): void {

    if (typeof document != 'undefined') {
      this._ActivatedRoute.paramMap.subscribe({
        next:(res) =>{
          // console.log(res.get('mealid'));
  
          this._MealesService.getMealeDetails(res.get('mealid')!).subscribe({
            next: (res) => {
              this.mealeDetailsById = res.meals[0]
              console.log(this.mealeDetailsById);
              
            }
          })
          
        }
      })
    }

    
  }


  getIngredients(mealedetails:any):any
  {
    const ingredients = [];
    for(let i = 1 ; i <= 20 ; i++){
      const stringredient = `strIngredient${i}` ; 
      const strmeasure = `strMeasure${i}` ; 
      if(mealedetails[stringredient]){
        ingredients.push({ingred: mealedetails[stringredient] , measur:mealedetails[strmeasure]})
      }
      else{
        return ingredients
      }
    }
  }

}
// '53065'