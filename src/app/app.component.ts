import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, RouterLink,MatButtonModule,MatRippleModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOption: string = ''
  
  onOption(menuOption: string){
    this.menuOption = menuOption
  }
}
