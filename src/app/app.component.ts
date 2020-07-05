import {Component, OnInit} from '@angular/core';
import {SettingsService} from "./services/settings.service";
import {ActuatorService} from "./services/actuator.service";
import {AssetService} from "./services/asset.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'parking-lot-screen';

  public offerAssetChoice = false;

  public get showUniverse(): boolean {
    return this.settingsService.assetModeSet;
  }

  public get showAssetOptions(): boolean {
    return this.settingsService.assetModeNotSet && this.offerAssetChoice;
  }

  public get showLoading(): boolean {
    const checkingOnline = !this.showAssetOptions && !this.showUniverse;
    const loadingAssets = this.settingsService.assetModeSet && !this.assetService.assetsLoaded;
    return checkingOnline || loadingAssets;
  }

  constructor(
    private settingsService: SettingsService,
    private assetService: AssetService,
    private actuatorService: ActuatorService,
  ) {
  }

  public ngOnInit() {
    this.checkIfOnline();
  }

  public setOnline() {
    this.settingsService.setAssetsOnline();
    this.assetService.setupAssets();
  }

  public setOffline() {
    this.settingsService.setAssetsOffline();
    this.assetService.setupAssets();
  }

  private checkIfOnline() {
    let status;
    this.actuatorService.checkHealth()
      .subscribe((res) => status = res,
        (error) => {
          this.setOffline();
        }, () => {
          this.offerAssetChoice = true;
        });
  }
}
