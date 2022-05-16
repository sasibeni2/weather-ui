import { Component, OnInit } from '@angular/core';



@Component({
 
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  menuItems = [
    {
      title: 'Aktuális időjárás',
      link: '/current'
    },
    {
      title: '3 napos előrejelzés',
      link: '/forecast'
    },
    {
      title: 'Városok',
      link: '/city'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
