import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendComponent } from './components/friend/friend.component';
import { WorldComponent } from './components/world/world.component';
import { SceneComponent } from './components/scene/scene.component';
import { UniverseComponent } from './components/universe/universe.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FriendGalleryComponent } from './components/gallery/friend-gallery/friend-gallery.component';
import { GalleryDetailedImageComponent } from './components/gallery/gallery-detailed-image/gallery-detailed-image.component';
import { LocationGalleryComponent } from './components/gallery/location-gallery/location-gallery.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { ButtonComponent } from './components/simple/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    WorldComponent,
    SceneComponent,
    UniverseComponent,
    GalleryComponent,
    FriendGalleryComponent,
    GalleryDetailedImageComponent,
    LocationGalleryComponent,
    StartMenuComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
