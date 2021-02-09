import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 navigate : any;
  public labels = ['Family', 'Friends', 'Notes'];
  constructor() {
  this.sideMenu();
  }

   sideMenu()
    {
      this.navigate =
      [
        {
          title : "Home",
          url   : "/home",
          icon  : "home"
        },
        {
          title : "login",
          url   : "/login",
          icon  : "log-in"
        },
        {
          title : "Historique des trajets",
          url   : "/historique-trajets",
          icon  : "time"
        },

           {
             title : "Aide",
             url   : "/contacts",
                  icon  : "help"
           },
           {
                          title : "promotions",
                          url   : "/contacts",
                          icon  : "time"
                        },
      ]
    }
}
