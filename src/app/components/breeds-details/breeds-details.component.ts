import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GetService } from "src/app/shared/services/get.service";

@Component({
  selector: "app-breeds-details",
  templateUrl: "./breeds-details.component.html",
  styleUrls: ["./breeds-details.component.scss"],
})
export class BreedsDetailsComponent implements OnInit {
  public breed: any;
  public breedDetails: any;

  constructor(
    private route: ActivatedRoute,
    private getFactService: GetService,
    private router: Router
  ) {
    this.breed = this.route.snapshot.queryParamMap.get("breed");
  }

  ngOnInit() {
    this.getFactService.get("https://catfact.ninja/fact").subscribe((data) => {
      this.breedDetails = data;
    });
  }

  public back (){
    this.router.navigate(['breeds-list']);

  }
}
