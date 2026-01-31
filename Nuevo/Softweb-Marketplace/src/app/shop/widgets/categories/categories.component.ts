import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
