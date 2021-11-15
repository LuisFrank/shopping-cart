import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { faHeart, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isMenuCollapsed = true;
  myCollapsible:any;
  faHeart = faHeart;
  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  
  constructor() { }

  ngOnInit(): void {
  }

  displayMenu(event:any) {
   this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  collapsable(){
      
  }


}
