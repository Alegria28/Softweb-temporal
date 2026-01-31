import { Component, OnInit } from '@angular/core';
import { Product } from '../../../modals/product.model';
import { ProductService } from '../../../components/shared/services/product.service';
import { SlicePipe, CurrencyPipe, CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss'],
  imports: [SlicePipe, CurrencyPipe, CommonModule, MatListModule, MatIconModule, RouterLink]
})
export class PopularProductsComponent implements OnInit {

  public products: Product[] = [];
  public product: Product = new Product(0, '', 0);

  constructor(public productsService: ProductService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }
}
