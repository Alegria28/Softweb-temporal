import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Product } from '../../../modals/product.model';
import { CartService } from '../../../components/shared/services/cart.service';
import { ProductService } from '../../../components/shared/services/product.service';
import { WishlistService } from '../../../components/shared/services/wishlist.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-product-carousel-three',
  templateUrl: './product-carousel-three.component.html',
  styleUrls: ['./product-carousel-three.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgxSkeletonLoaderModule,
    RouterModule,
  ]
})
export class ProductCarouselThreeComponent implements OnInit {
  contentLoaded = false;
  @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();

  @Input('product') product: Array<Product> = [];
  public config: any = {};

  constructor(private cartService: CartService, private productsService: ProductService, private wishlistService: WishlistService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 3000);
  }

  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 4,
      spaceBetween: 16,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: { slidesPerView: 1 },
        740: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
      }
    }
  }

  public addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
    console.log(product, quantity);
  }

  public addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
  }

  public addToCompare(product: Product) {
    this.productsService.addToCompare(product);
  }

  public openProductDialog(product: Product) {
    let dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product,
      panelClass: 'product-dialog',
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.router.navigate(['/home/products/', product.id, product.name]);
      }
    });
  }
}
