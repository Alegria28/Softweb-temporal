import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Product } from '../../../modals/product.model';

interface Picture {
  big: string;
  small: string;
}

export interface ProductDisplay {
  id: number;
  name?: string;
  price: number;
  pictures?: Picture[];
}

class ProductService {
  getProducts() {
    return { subscribe: (callback: any) => callback([]) };
  }
}

@Component({
  selector: 'app-product-vertical',
  templateUrl: './product-vertical.component.html',
  styleUrls: ['./product-vertical.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgxSkeletonLoaderModule
  ],
  providers: [ProductService]
})
export class ProductVerticalComponent implements OnInit {
  @Input() products: Product[] = [];
  contentLoaded: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((product: Product[]) => {
      this.products = product;
      this.contentLoaded = true;
    });
  }
}
