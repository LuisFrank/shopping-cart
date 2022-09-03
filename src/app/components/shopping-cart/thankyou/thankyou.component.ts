import { Component, OnInit } from '@angular/core';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}
