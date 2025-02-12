import { Component, OnInit } from '@angular/core';
import { MealesService } from '../../shared/services/meales.service';
import { Meal } from '../../shared/interfaces/meales';

@Component({
  selector: 'app-meales',
  imports: [],
  templateUrl: './meales.component.html',
  styleUrl: './meales.component.scss'
})
export class MealesComponent implements OnInit {

  mealcateg!:Meal[]

  constructor(private _MealesService:MealesService){}

  ngOnInit(): void {

    if (typeof document != "undefined") {
      this._MealesService.getAllCategories().subscribe({
        next: (res) => {
          this.mealcateg = res.meals
          console.log(this.mealcateg);
          
        }
      })
    }

    
  }

}
