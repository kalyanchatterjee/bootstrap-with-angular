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

  // Declare all your filter arrays here
  timeframeFilters: Filter[];

  ngOnInit() {
    this.dataService.getTimeframeFilters().subscribe(filters => {
      this.timeframeFilters = filters;
    });
  }
}
