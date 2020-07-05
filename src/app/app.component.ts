import {Component, OnInit} from '@angular/core';
import {SettingsService} from "./services/settings.service";
import {ActuatorService} from "./services/actuator.service";

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
    return !this.showAssetOptions && !this.showUniverse;
  }

  constructor(
    private settingsService: SettingsService,
    private actuatorService: ActuatorService,
  ) {
  }

  public ngOnInit() {
    this.checkIfOnline();
  }

  public setOnline() {
    this.settingsService.setAssetsOnline();
  }

  public setOffline() {
    this.settingsService.setAssetsOffline();
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
