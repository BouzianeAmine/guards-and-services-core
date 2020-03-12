import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  error = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(username) {
    if (!this.authService.connect(username)) {
      this.error = true
    } else this.error = false
  }

  deconnect(){
    console.log('Deconnecting')
    this.authService.currentUser$.subscribe(user=>{
      console.log(user);
      this.authService.deconnect(user)
    })
  }

}
