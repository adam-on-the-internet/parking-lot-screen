import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private assetMode: number = 0;

  public get useOnlineAssets() {
    return this.assetMode === 1;
  }

  public get useOfflineAssets() {
    return this.assetMode === 2;
  }

  public get assetModeSet() {
    return !this.assetModeNotSet;
  }

  public get assetModeNotSet() {
    return this.assetMode === 0;
  }

  public setAssetsOnline() {
    this.assetMode = 1;
  }

  public setAssetsOffline() {
    this.assetMode = 2;
  }
}
