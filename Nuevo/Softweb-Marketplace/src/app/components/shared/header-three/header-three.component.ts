import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

class ProductService {
  getProducts() {
    return { subscribe: (callback: any) => callback([]) };
  }

  changeCurrency(currency: string) {
    console.log('Currency changed to:', currency);
  }
}

class TranslateService {
  instant(key: string) {
    return key;
  }

  use(lang: string) {
    console.log('Language changed to:', lang);
  }
}

class CartService {
  getItems() {
    return { subscribe: (callback: any) => callback([]) };
  }
}

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: [],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [CartService, ProductService, TranslateService]
})
export class HeaderThreeComponent implements OnInit {
  products: Product[] = [];
  shoppingCartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    public productService: ProductService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.cartService.getItems().subscribe((shoppingCartItems: CartItem[]) => {
      this.shoppingCartItems = shoppingCartItems;
    });
  }

  changeCurrency(currency: string) {
    this.productService.changeCurrency(currency);
  }

  changeLanguage(flag: string) {
    this.translate.use(flag);
  }
}
