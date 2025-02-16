import { Component, OnInit } from '@angular/core';
import { MealesService } from '../../shared/services/meales.service';
import { Meal } from '../../shared/interfaces/meales';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-meales',
  imports: [RouterLink , RouterLinkActive ],
  templateUrl: './meales.component.html',
  styleUrl: './meales.component.scss'
})
export class MealesComponent implements OnInit {

  mealcateg!:Meal[]

  mealesname!:any
  

  

  constructor(private _MealesService:MealesService , private _ActivatedRoute:ActivatedRoute , private _Router:Router){}

  ngOnInit(): void {

    if (typeof document != "undefined") {
      this.getallcateg()


      this._ActivatedRoute.paramMap.subscribe({
        next: (res) => {
          const categoryname = res.get('categoryname')

          if(categoryname){

            // this.getFiltercatg(categoryname)

            this.getallmeales(categoryname)


          }
          
        }
      })
    }

    
  }
  
  // --------------------------------------------------------

  getallcateg(){
    this._MealesService.getAllCategories().subscribe({
      next: (res) => {
        this.mealcateg = res.meals
        // console.log(this.mealcateg);
        
      }
    })
  }

  getallmeales(categorie:string){
    this._MealesService.getAllMealesByCategories(categorie).subscribe({
      next: (res) => {
        this.mealesname = res.meals
        // console.log(this.mealesname);
        
      }
    })
  }

  onOptionChange(event:any) {
    
    this._Router.navigate([`/category/${event.target.value}`]);

    

    // لما بخلي ال data type من نوع Event مش بيديني ال value ال وقع عليه ال event  لذالك استخدمتو من نوع any
    
    
  }



}
