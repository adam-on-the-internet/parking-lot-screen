import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {
  public previousId = 0;

  constructor() { }

  public getUniqueId(): string {
    this.previousId++;
    return this.previousId.toString();
  }
}
