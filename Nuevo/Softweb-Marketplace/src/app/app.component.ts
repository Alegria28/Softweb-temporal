import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderThreeComponent } from './components/shared/header-three/header-three.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderThreeComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Softweb-Marketplace';


  public settings = {
    theme: 'sophia-v1'
  };
}