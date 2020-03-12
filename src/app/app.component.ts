import { Component, OnInit } from '@angular/core';
import { chargeToLocalStorage } from './core/consts/consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'restau-app';
}
