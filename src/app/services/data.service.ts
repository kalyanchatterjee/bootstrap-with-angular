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
export class DataService {
  getCardsUrl: string = "http://10.126.224.34:3000/api/data/cards/";
  getTimeframesUrl: string = "http://10.126.224.34:3000/api/data/timeframe/";
  constructor(private http: HttpClient) {}

  getCardsData(): Observable<Card[]> {
    return this.http.get<Card[]>(this.getCardsUrl);
  }

  getTimeframeFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(this.getTimeframesUrl);
  }
}
