import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
	public appPages = [
    {
      title: 'Home',
      url: '/landing',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'list'
    },
    {
      title: 'Buy now',
      url: '/buynow2',
      icon: 'cart'
    },
    {
      title: 'Claims',
      url: '/claims',
      icon: 'cash'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'call'
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'help-circle'
    }
  ];
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
  }
}
