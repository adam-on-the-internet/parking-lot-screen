import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public friendsPerScene = 5;
  public secondsPerScene = 2;
  public availableSpeeds = 16;
  public availableAnimations = 6;
}
