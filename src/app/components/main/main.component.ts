import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { fromEventPattern } from "rxjs";
import { Card } from "../../models/card";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  cards: Card[];
  loaded: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loaded = false;
    this.dataService.getCardsData().subscribe(cards => {
      this.cards = cards;
      this.loaded = true;
    });
  }
}
