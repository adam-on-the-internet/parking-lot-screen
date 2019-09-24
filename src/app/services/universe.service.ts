import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public friendsPerScene = 6;
  public secondsPerScene = 40;
  public availableSpeeds = 16;
  public availableAnimations = 12;
}
