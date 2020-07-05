import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailedImage} from "../models/Image.model";
import {ActuatorService} from "./actuator.service";

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  public friends: DetailedImage[] = null;
  public locations: DetailedImage[] = null;
  public error = false;

  private online = true;

  public get assetsLoaded(): boolean {
    return this.friends !== null && this.locations !== null;
  }

  constructor(
    private http: HttpClient,
    private actuatorService: ActuatorService,
  ) {
  }

  public setupAssets() {
    let assets;
    this.actuatorService.checkHealth()
      .subscribe((res) => assets = res,
        (error) => {
          this.tryLoadingOffline()
        }, () => {
          this.tryLoadingOnline();
        });
  }

  private tryLoadingOnline() {
    let assets;
    this.loadAssetsOnline()
      .subscribe((res) => assets = res,
        (error) => {
          this.error = true;
          console.log("NO ASSETS AVAILABLE");
        }, () => {
          this.online = true;
          console.log("loading online assets...");
          this.applyAssets(assets);
        });
  }

  private tryLoadingOffline() {
    let assets;
    this.loadAssetsOffline()
      .subscribe((res) => assets = res,
        (error) => {
          this.error = true;
          console.log("NO ASSETS AVAILABLE");
        }, () => {
          this.online = false;
          console.log("loading offline assets...");
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
    const offlineSource = "assets/offline-assets/";
    const path = this.online ? onlineSource : offlineSource;
    assets.forEach((asset) => {
      asset.src = path + asset.src;
    });
  }

  private loadAssetsOffline(): Observable<DetailedImage[]> {
    const offlineUrl = "../../assets/offline-assets/catalog.json";
    return this.http.get(offlineUrl) as Observable<DetailedImage[]>;
  }

  private loadAssetsOnline(): Observable<DetailedImage[]> {
    const onlineUrl = "https://adam-on-the-internet.github.io/asset-reader/catalog.json";
    return this.http.get(onlineUrl) as Observable<DetailedImage[]>;
  }
}
