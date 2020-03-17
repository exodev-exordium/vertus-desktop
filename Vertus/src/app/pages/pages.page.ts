import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  public selectedIndexPages = -1;
  public selectedIndexSettings = -1;

  public mainPages = [
    {
      title: 'Dashboard',
      url: '/pages/dashboard',
      icon: 'laptop'
    },
    {
      title: 'Connections',
      url: '/pages/connections',
      icon: 'server'
    }
  ];

  public settingsPages = [
    {
      title: 'Settings',
      url: '/pages/settings',
      icon: 'cog'
    },
    {
      title: 'Signout',
      url: '/pages/settings',
      icon: 'log-out'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
