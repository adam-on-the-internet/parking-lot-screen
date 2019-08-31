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

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    WorldComponent,
    SceneComponent,
    UniverseComponent,
    GalleryComponent,
    FriendGalleryComponent,
    GalleryDetailedImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
