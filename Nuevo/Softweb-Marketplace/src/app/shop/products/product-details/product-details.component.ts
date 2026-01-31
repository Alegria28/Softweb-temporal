import { Component, OnInit, ViewChild, Output, EventEmitter, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CurrencyPipe } from '@angular/common';
import { SlicePipe } from '@angular/common';
import { Product } from '../../../modals/product.model';
import { ProductService } from '../../../components/shared/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../../components/shared/services/cart.service';
import { ProductZoomComponent } from './product-zoom/product-zoom.component';
import { ProductCarouselThreeComponent } from '../product-carousel-three/product-carousel-three.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTabsModule, MatListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatButtonModule, MatTooltipModule, CurrencyPipe, SlicePipe, ProductCarouselThreeComponent, BreadcrumbComponent]
})
export class ProductDetailsComponent implements OnInit {

  public config: any = {};
  @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();

  @ViewChild('zoomViewer', { static: true }) zoomViewer: any;

  public product: Product = new Product(0, '', 0);
  public products: Product[] = [];

  public image: any;
  public zoomImage: any;

  public counter: number = 1;

  index: number = 0;
  bigProductImageIndex = 0;

  constructor(private route: ActivatedRoute, public productsService: ProductService, public dialog: MatDialog, private router: Router, private cartService: CartService, private zone: NgZone) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productsService.getProduct(id).subscribe(product => this.product = product)
    });
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
    this.getRelatedProducts();
  }

  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 3,
      spaceBetween: 10,
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
        1280: { slidesPerView: 3 }
      }
    }
  }

  public openProductDialog(product: any, bigProductImageIndex: any) {
    let dialogRef = this.dialog.open(ProductZoomComponent, {
      data: { product, index: bigProductImageIndex },
      panelClass: 'product-dialog',
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.router.navigate(['/products', product.id, product.name]);
      }
    });
  }

  public selectImage(index: any) {
    console.log(this.product)
    console.log(index)
    this.bigProductImageIndex = index;
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  getRelatedProducts() {
    this.productsService.getProducts()
      .subscribe(
        (product: Product[]) => {
          this.products = product
        });
  }

  public addToCart(product: Product, quantity: any) {
    if (quantity == 0) return false;
    this.cartService.addToCart(product, parseInt(quantity));
    return true;
  }

  public buyNow(product: Product, quantity: any) {
    if (quantity > 0)
      this.cartService.addToCart(product, parseInt(quantity));
    this.router.navigate(['/pages/checkout']);
  }

  public onMouseMove(e: any) {
    if (window.innerWidth >= 1280) {
      var image, offsetX, offsetY, x, y, zoomer;
      image = e.currentTarget;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      x = offsetX / image.offsetWidth * 100;
      y = offsetY / image.offsetHeight * 100;
      zoomer = this.zoomViewer.nativeElement.children[0];
      if (zoomer) {
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
        zoomer.style.display = "block";
        zoomer.style.height = image.height + 'px';
        zoomer.style.width = image.width + 'px';
      }
    }
  }

  public onMouseLeave(event: any) {
    this.zoomViewer.nativeElement.children[0].style.display = "none";
  }

  public openZoomViewer() {
    this.dialog.open(ProductZoomComponent, {
      data: this.zoomImage,
      panelClass: 'zoom-dialog'
    });
  }

}