import { Component, OnInit } from '@angular/core';
import { Product } from '../../../modals/product.model';
import { ProductService } from '../../../components/shared/services/product.service';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.sass']
})
export class PopularProductsComponent implements OnInit {

  public products: Product[] = [];
  public product: Product = {};

  constructor(public productsService: ProductService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }
}
