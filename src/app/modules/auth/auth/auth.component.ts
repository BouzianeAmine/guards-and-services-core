import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  error = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(username: string) {
    if (!this.authService.connect(username)) {
      this.error = true
    } else {
      this.error = false
      this.router.navigate(['/votes'])
    }
  }

}
