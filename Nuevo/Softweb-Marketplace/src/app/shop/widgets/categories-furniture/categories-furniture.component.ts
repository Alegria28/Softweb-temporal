import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories-furniture',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './categories-furniture.component.html',
  styleUrls: ['./categories-furniture.component.sass']
})
export class CategoriesFurnitureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
