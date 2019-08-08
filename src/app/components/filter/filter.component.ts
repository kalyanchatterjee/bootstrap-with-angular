import { Component, Input } from "@angular/core";
import { Filter } from "../../models/filter";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent {
  @Input() filters: Filter[];
}
