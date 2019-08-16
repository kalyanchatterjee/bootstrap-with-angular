import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Filter } from "../../models/filter";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private dataService: DataService) {}

  // Declare all your filter arrays, corresponding labels and ids here.
  // IDs are needed for form submit
  timeframeFilters: Filter[];
  timeframeLabel: String;
  timeframeName: String;

  ngOnInit() {
    // Timeframe filter - Start
    this.dataService.getTimeframeFilters().subscribe(filters => {
      this.timeframeFilters = filters;
    });
    this.timeframeLabel = "Select timeframe:";
    // Timeframe filter - End
  }
}
