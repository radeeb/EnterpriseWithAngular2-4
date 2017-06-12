import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDN3cVFUdNOMSj1tzN2wOR9TdB-jwmueiA",
    authDomain: "enterpriseapp-95ec1.firebaseapp.com",
    databaseURL: "https://enterpriseapp-95ec1.firebaseio.com",
    projectId: "enterpriseapp-95ec1",
    storageBucket: "enterpriseapp-95ec1.appspot.com",
    messagingSenderId: "98225446014"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
