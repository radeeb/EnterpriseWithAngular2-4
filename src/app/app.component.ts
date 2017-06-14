import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  displayName;

  constructor(private af: AngularFire){
  }

  ngOnInit() {
      this.af.auth.subscribe(authState => {
          if (!authState){
            this.displayName = null;
            console.log("Not logged in");
            }
          else{
            console.log("Logged in", authState);
            this.displayName = authState.auth.displayName;
            }
      });
}

login() {
    this.af.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
    }).then(authState => {
        console.log("AFTER LOGIN", authState);
    });
}

logout() {
    this.af.auth.logout();
}
}
