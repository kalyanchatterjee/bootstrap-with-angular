import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
// Models
import { Card } from "../models/card";
import { Filter } from "../models/filter";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "applicaiton/json" })
};

@Injectable({
  providedIn: "root"
})

/*
The class we have created provides a service. The @Injectable() decorator marks it as a service that can be injected, but Angular can't actually inject it anywhere until you configure an Angular dependency injector with a provider of that service.
*/
export class DataService {
  private getCardsUrl: string = "http://10.126.224.34:3000/api/data/cards/";
  private getTimeframesUrl: string =
    "http://10.126.224.34:3000/api/data/timeframe/";

  // Local variable called http which is of type HttpClient
  constructor(private http: HttpClient) {}

  // We have casted the observable into an array of type Card
  getCardsData(timeframe?): Observable<Card[]> {
    return this.http.get<Card[]>(this.getCardsUrl);
  }

  getTimeframeFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(this.getTimeframesUrl);
  }
}
