import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../../../components/shared/services/product.service';
import { Product } from '../../../../modals/product.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-zoom',
  templateUrl: './product-zoom.component.html',
  styleUrls: ['./product-zoom.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatIconModule,
  ]
})
export class ProductZoomComponent implements OnInit {
  public product: Product = {} as Product;
  public selectedProductImageIndex = 0;

  @ViewChild('zoomImage', { static: true }) zoomImage: any = null;

  constructor(private productsService: ProductService, public dialogRef: MatDialogRef<ProductZoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: any, index: any }) {
    this.product = data.product;
    this.selectedProductImageIndex = data.index;
  }

  ngOnInit() {

  }

  public close(): void {
    this.dialogRef.close();
  }


}
