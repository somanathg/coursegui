import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //create object
  name='John doe';
  product = {
    
    pname: 'Samsung',
    price: 8999,
    color: 'Black',
    discount: 10,
    inStock:5,
    productImage:'/assets/images/iphone.png'
    
  }
  getDiscountPrice(){
    return this.product.price-(this.product.price*this.product.discount/100)
  }

}
