import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendComponent } from './components/friend/friend.component';
import { WorldComponent } from './components/world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
