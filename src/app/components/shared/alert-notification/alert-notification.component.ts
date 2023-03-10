import { Component, Input, OnInit } from '@angular/core';
import { NotificationType } from 'src/app/models/notification-type';

@Component({
  selector: 'app-alert-notification',
  templateUrl: './alert-notification.component.html',
  styleUrls: ['./alert-notification.component.scss']
})
export class AlertNotificationComponent implements OnInit {



  @Input()
  notificationType:any;

  constructor() { }

  ngOnInit(): void {
    console.log("message1")
  }

  showNotification(): NotificationType {
      //success
      //danger
      //warning
      var notification = this.notificationType;
      return notification;
  } 

}
