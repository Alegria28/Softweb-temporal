import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { Product } from '../../../modals/product.model';
import { CartService } from '../services/cart.service';
import { Observable, of } from 'rxjs';
import { CartItem } from '../../../modals/cart-item';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shopping-widgets-three',
  templateUrl: './shopping-widgets-three.component.html',
  styleUrls: ['./shopping-widgets-three.component.scss'],
  imports: [AsyncPipe, CurrencyPipe, RouterLink, MatDividerModule]
})
export class ShoppingWidgetsThreeComponent implements OnInit {

  public sidenavMenuItems: Array<any> = [];

  @Input() shoppingCartItems: CartItem[] = [];

  constructor(private cartService: CartService, public productService: ProductService) {
  }

  ngOnInit() {
  }
  public updateCurrency(curr: any) {
    this.productService.currency = curr;
  }


  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }


}











