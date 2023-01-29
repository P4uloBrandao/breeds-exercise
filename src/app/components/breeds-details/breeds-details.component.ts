import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-breeds-details",
  templateUrl: "./breeds-details.component.html",
  styleUrls: ["./breeds-details.component.scss"],
})
export class BreedsDetailsComponent implements OnInit {
  public breed: any;
  public breedDetails: any;

  constructor(private route: ActivatedRoute) {
    this.breed = this.route.snapshot.queryParamMap.get("breed");
  }

  ngOnInit() {}
}
