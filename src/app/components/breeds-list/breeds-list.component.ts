import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GetService } from "src/app/shared/services/get.service";

@Component({
  selector: "app-breeds-list",
  templateUrl: "./breeds-list.component.html",
  styleUrls: ["./breeds-list.component.scss"],
})
export class BreedsListComponent {
  public breeds: any;
  public totalPages: number = 0;

  constructor(public getBreedService: GetService, private route: Router) {
    this.getBreedService
      .get("https://catfact.ninja/breeds")
      .subscribe((data) => {
        this.breeds = data;
        this.totalPages = Math.round(data.total / data.per_page);
      });
  }

  public getPrevious() {
    this.getBreedService
      .get(this.breeds.prev_page_url)
      .subscribe((data) => {
        this.breeds = data;
      });
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  public getNext() {
    this.getBreedService
      .get(this.breeds.next_page_url)
      .subscribe((data) => {
        this.breeds = data;
      });
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  public goToFact(value: any) {
    this.route.navigate(['breeds-details'], {queryParams: {breed: value}});
  }
}
