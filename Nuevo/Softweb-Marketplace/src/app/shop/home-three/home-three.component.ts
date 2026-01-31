import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductCarouselThreeComponent } from '../products/product-carousel-three/product-carousel-three.component';
import { ProductVerticalComponent } from '../products/product-vertical/product-vertical.component';
import { Product } from '../../modals/product.model';
import { ProductService } from '../../components/shared/services/product.service';
import { CartItem } from '../../modals/cart-item';
import { CartService } from '../../components/shared/services/cart.service';
//! import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.css'],
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    NgxSkeletonLoaderModule,
    RouterModule,
    MatToolbarModule,
    MatTabsModule,
    ProductCarouselThreeComponent,
    ProductVerticalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeThreeComponent implements OnInit {


  products: Product[] = [];
  public banners = [];

  shoppingCartItems: CartItem[] = [];
  wishlistItems: Product[] = [];
  contentLoaded = false;

  public featuredProducts: Array<Product> = [];
  public onProducts: Array<Product> = [];
  public topRatedProducts: Array<Product> = [];
  public newArrivalsProducts: Array<Product> = [];

  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
    { title: '  best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
  ];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    this.productService.getProducts()
      .subscribe(
        (product: Product[]) => {
          this.products = product;
          //! console.log(product);
        }
      );
    setTimeout(() => {
      this.contentLoaded = true;
    }, 3000);
  }

  // Collection banner
  public discount = [{
    image: 'assets/images/product/tablet_bn.png',
    title: 'Tablets, Smartphones and more',
    subtitle: 'Sale up to 30%',
  }, {
    image: 'assets/images/product/camera_bn.png',
    title: 'New Cameras Collection',
    subtitle: 'Sale up to 30%',
  }]

}
