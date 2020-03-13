import { Component, OnInit } from '@angular/core';
import { chargeToLocalStorage } from './core/consts/consts';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //chargeToLocalStorage()
  }

  isAuth(): boolean {
    return this.authService.isAuth()
  }
}
