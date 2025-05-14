import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NotificationType } from 'src/app/models/notification-type';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any = {

  }

  notification_type:NotificationType = new NotificationType(0,'noone','');

  returnUrl:string = "";

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute)
   { }

  ngOnInit(): void {
     // reset login status
    this.authService.logout()

     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(control:any){
    console.log("control1 one tiem",control);
    const formData = new FormData();
    formData.append('Email', this.model.email);
    formData.append('Password', this.model);

    const formOptions = {
    headers: new HttpHeaders({
      // No pongas Content-Type: multipart/form-data manualmente,
      // el navegador lo agrega automáticamente al usar FormData
    })
  };

    
    //  this.model.action = 'Post';  
    this.authService.loginForm(formData,formOptions).subscribe(response => {
      console.info("success");
      console.info(response);
      // if (response.status === 'success') {
        //pasar ruta
        this.authService.setUser(response);
        this.authService.navigateByUrl(this.returnUrl);
      // }
    }, error => {
      this.notification_type = new NotificationType(0,'danger','Usuario y password incorrectos.')
      console.info("error login");
      console.error(error);
    });

  }



}
