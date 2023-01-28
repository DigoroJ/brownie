import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products: any[] = [];
  productInCart: any = [];
  cartItem: any = {};
  totalInCart: number = 0;
  totalPriceInCart: number = 0;
  totalQuantity: number = 0;
  totalItems: number = 0;
  wish: number = 0;

  constructor(
    private sharedDataService: SharedDataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('Products')) {
      let localProduct: any = localStorage.getItem('Products');
      this.products = JSON.parse(localProduct);

      this.calculateTotal();
      console.log(this.products);
      
    }
  }

  RemoveItem(index: any) {
    this.products.splice(index, 1);
    console.log(this.products);
    this.totalInCart = 0;
    localStorage.setItem('Products', JSON.stringify(this.products));
    this.showRemoved();
    this.calculateTotal();
    location.reload();
  }

  showRemoved() {
    this.toastr.success('Product has been removed');
  }

  calculateTotal() {
    let num = 0;
    this.products.forEach((data: any) => {
      this.totalInCart += data.quantity;
      this.totalPriceInCart += data.subtotal;
      this.totalItems = this.products.length;
      console.log(this.totalInCart);
    });
    this.sharedDataService.changeMessage(this.products.length);
  }

  showSuccess() {
    this.toastr.success('Product has been added');
  }

  addToCart(currentProduct: any) {
    this.totalInCart++;

    console.log(this.totalInCart);

    console.log(currentProduct);
    //let matched = false;
    this.products.forEach((citem: any) => {
      console.log(this.productInCart);
      if (citem.product_id == currentProduct.product_id) {
        citem.quantity++;
        // matched = true;
        citem.subtotal = currentProduct.price * citem.quantity;
        this.totalPriceInCart += citem.subtotal;
        this.showSuccess();
      }
    });

    this.showSuccess();
    this.sharedDataService.changeMessage(this.products.length);
    localStorage.setItem('Products', JSON.stringify(this.products));
    window.location.reload();
  }

  minus(currentProduct: any) {
    console.log(currentProduct);
    //let matched = false;
    this.products.forEach((citem: any) => {
      console.log(this.productInCart);
      if (citem.product_id == currentProduct.product_id) {
        if (citem.quantity >= 2) {
          citem.quantity--;
          // matched = true;
        citem.subtotal = currentProduct.price * citem.quantity;
        this.totalPriceInCart -= citem.subtotal;
        this.showMinusSuccess();
        }
        
      }
    });
    window.location.reload();
    localStorage.setItem('Products', JSON.stringify(this.products));


  }

  showMinusSuccess() {
    this.toastr.success('Product has been subtracted');
  }
}
