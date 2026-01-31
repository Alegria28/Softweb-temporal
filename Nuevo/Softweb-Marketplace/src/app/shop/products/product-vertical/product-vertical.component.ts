import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../components/shared/services/product.service';
import { Product } from '../../../modals/product.model';
import { SlicePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-vertical',
  templateUrl: './product-vertical.component.html',
  styleUrls: ['./product-vertical.component.sass'],
  imports: [SlicePipe, DecimalPipe]
})
export class ProductVerticalComponent implements OnInit {
  contentLoaded = false;
  @Input() products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        product => this.products = product
      )

    setTimeout(() => {
      this.contentLoaded = true;
    }, 3000);
  }

}
