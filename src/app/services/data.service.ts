import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Filter } from "../models/filter";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "applicaiton/json" })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  getTimeframeFilters(): Filter[] {
    const filters = [
      {
        value: "None",
        text: "Select timeframe"
      },
      {
        value: "WTD",
        text: "WTD"
      },
      {
        value: "MTD",
        text: "MTD"
      },
      {
        value: "QTD",
        text: "QTD"
      },
      {
        value: "YTD",
        text: "YTD"
      }
    ];
    return filters;
  }
}
