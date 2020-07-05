import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {SettingsService} from "./settings.service";
import {DetailedImage} from "../models/Image.model";

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

  private applyAssets(assets) {
    this.friends = assets.filter((asset) => {
      return asset.tags.includes("friend");
    });
    this.locations = assets.filter((asset) => {
      return asset.tags.includes("background");
    });
  }

  private loadAssets(): Observable<any> {
    if (this.settingsService.useOnlineAssets) {
      return this.loadOnlineAssets();
    } else {
      return this.loadOfflineAssets();
    }
  }

  private loadOfflineAssets() {
    return of([]);
  }

  private loadOnlineAssets() {
    const url = "https://adam-on-the-internet.github.io/asset-reader/catalog.json";
    return this.http.get(url) as Observable<any>;
  }
}
