import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    if (window.navigator.userAgent.includes('Vertus') ||
        window.navigator.userAgent.includes('Electron')) {
      console.log('Found Vertus or Electron UserAgent.');
      this.changeBase();
    } else {
      console.error('Did not find Vertus or Electron UserAgent.');
    }
  }

  ngOnInit() {
  }

  changeBase() {
    document.getElementsByTagName("base")[0].setAttribute("href", "./");
  }
}
