import {Component, OnInit} from '@angular/core';
import {AssetService} from "./services/asset.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'parking-lot-screen';

  public get showLoading(): boolean {
    return !this.assetService.assetsLoaded && !this.showError;
  }

  public get showUniverse(): boolean {
    return this.assetService.assetsLoaded;
  }

  public get showError(): boolean {
    return this.assetService.error;
  }

  constructor(
    private assetService: AssetService,
  ) {
  }

  public ngOnInit() {
    this.assetService.setupAssets();
  }
}
