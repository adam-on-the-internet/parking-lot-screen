import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {SettingsService} from "./settings.service";
import {DetailedImage} from "../models/Image.model";
import {ASSETS} from "../../assets/catalog.constants";

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  public friends: DetailedImage[] = null;
  public locations: DetailedImage[] = null;

  public get assetsLoaded(): boolean {
    return this.friends !== null && this.locations !== null;
  }

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService,
  ) {
  }

  public setupAssets() {
    let assets;
    this.loadAssets()
      .subscribe((res) => assets = res,
        (error) => {
          console.log("ERR");
        }, () => {
          this.applyAssets(assets);
        });
  }

  private applyAssets(assets: DetailedImage[]) {
    this.setAssetSource(assets);
    this.sortAssets(assets);
  }

  private sortAssets(assets: DetailedImage[]) {
    this.friends = assets.filter((asset) => {
      return asset.tags.includes("friend");
    });
    console.log("LOADED " + this.friends.length + " friend(s)");
    this.locations = assets.filter((asset) => {
      return asset.tags.includes("background");
    });
    console.log("LOADED " + this.locations.length + " location(s)");
  }

  private setAssetSource(assets: DetailedImage[]) {
    const onlineSource = "https://blissful-newton-edf9e2.netlify.app/assets";
    const offlineSource = "assets/";
    const path = this.settingsService.useOnlineAssets ? onlineSource : offlineSource;
    assets.forEach((asset) => {
      asset.src = path + asset.src;
    });
  }

  private loadAssets(): Observable<any> {
    if (this.settingsService.useOnlineAssets) {
      return this.loadOnlineAssets();
    } else {
      return of(ASSETS);
    }
  }

  private loadOnlineAssets() {
    const url = "https://adam-on-the-internet.github.io/asset-reader/catalog.json";
    return this.http.get(url) as Observable<any>;
  }
}
