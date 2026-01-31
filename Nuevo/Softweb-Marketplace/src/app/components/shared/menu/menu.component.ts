import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.megaMenu();
  }

  megaMenu() {
    const elements = document.querySelectorAll('.mat-mdc-menu-trigger');
    elements.forEach((el: Element) => {
      const htmlElement = el as HTMLElement;
      if (htmlElement.children.length > 0) {
        if (htmlElement.children[0].classList.contains('mega-menu')) {
          htmlElement.classList.add('mega-menu-pane');
        }
      }
    });
  }

  openMegaMenu() {
    this.megaMenu();
  }
}
