import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BreadcrumbComponent {
  @Input() title: string = '';
  @Input() breadcrumb: string = '';
}
