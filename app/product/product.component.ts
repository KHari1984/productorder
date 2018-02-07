import{Component,OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';

@Component({
    selector:'edu-product',
    templateUrl:'app/product/product.component.html',
    styleUrls:['app/product/style.css']
})
export class ProductComponent implements OnInit
{
    pageTitle:string='****Product List****'
    filterText:string;
    imagewidth:number=40;
    showImage:boolean=true;
    ratingValue:string;
    errorMessage:string;

    toggleImage():void{
        this.showImage=!this.showImage
    }
    ShowList:boolean=false;     
    ShowTable:boolean=true;  
    toggleList():void{
        
      this.ShowList=!this.ShowList;
      this.ShowTable=!this.ShowTable;
    }
    products:IProduct[];
    constructor(private ProductService: ProductService) { }
    ngOnInit():void{
        this.ProductService.getProducts()
             .subscribe(products =>this.products = products,
                     error=> this.errorMessage=<any>error)
     }
 
     onRatingClicked(message:string): void{
         this.ratingValue =message
     }
   

}