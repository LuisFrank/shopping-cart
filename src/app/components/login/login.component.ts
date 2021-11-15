import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any = {

  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logout()
  }

  login(control:any){
    console.log("control",control);

    this.model.action = 'login';  
    this.authService.loginForm(this.model).subscribe(response => {
      if (response.status === 'success') {
        this.authService.setUser(response);
      }
    }, error => {
      console.error(error);
    });

  }

}
