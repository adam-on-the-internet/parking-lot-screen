import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DetailedImage} from "../models/Image.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActuatorService {
  private healthUrl = "https://aoti-basic-express-app.herokuapp.com/actuator/health";

  constructor(
    private http: HttpClient,
  ) {
  }

  public checkHealth(): Observable<any> {
    return this.http.get(this.healthUrl) as Observable<any>;
  }
}
