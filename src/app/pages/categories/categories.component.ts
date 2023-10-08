import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryList:any[]=[]
   constructor(private master:MasterService, private route:Router){}
   ngOnInit(): void {
    this.getAllFoodCatagory();

   }
getAllFoodCatagory(){
  this.master.getAllFoodCategory().subscribe((ele:any)=>{
  this.categoryList=ele.data;
  })
}
navigate(items:string){
  this.route.navigate(['/restaurant-items',items])
}
}
