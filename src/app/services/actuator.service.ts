import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActuatorService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public checkHealth(): Observable<any> {
    const url = "https://aoti-basic-express-app.herokuapp.com/actuator/health";
    return this.http.get(url) as Observable<any>;
  }
}
