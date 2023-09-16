import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
//fetch data from child(search)component
  searchText:string='';

  setSearchText(value:string){
    this.searchText=value;
  }

}














  //create object
  // name='John doe';
  // addToCart:number=0;
  // product = {
    
  //   pname: 'Samsung',
  //   price: 8999,
  //   color: 'Black',
  //   discount: 10,
  //   inStock:5,
  //   productImage:'/assets/images/iphone.png'
    
  // }
  // getDiscountPrice(){
  //   return this.product.price-(this.product.price*this.product.discount/100)
  // }
  // onNameChange(event:any){

    
  // }
  // decreamentCartValue(){
  //  if (this.addToCart>0) {
  //   this.addToCart--;
  //  }
  // }
  // increamentCartValue(){
  //  if (this.addToCart<this.product.inStock) {
  //   this.addToCart++;
  //  }
  // }