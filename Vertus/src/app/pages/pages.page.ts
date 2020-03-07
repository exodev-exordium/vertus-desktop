import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  public selectedIndexPages = 0;

  public pages = [
    {
      title: 'Dashboard',
      url: '/pages/dashboard',
      icon: 'laptop'
    },
    {
      title: 'Settings',
      url: '/pages/settings',
      icon: 'cog'
    }
  ]

  constructor() { }

  ngOnInit() {
    /*
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    */
  }

}