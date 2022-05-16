import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<void>;
  constructor() { 
    this.onToggleSidenav = new EventEmitter();
  }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }

}
