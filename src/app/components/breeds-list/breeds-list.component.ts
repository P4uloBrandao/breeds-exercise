import { Component } from "@angular/core";
import { GetBreedsService } from "src/app/shared/services/getBreeds.service";

@Component({
  selector: "app-breeds-list",
  templateUrl: "./breeds-list.component.html",
  styleUrls: ["./breeds-list.component.scss"],
})
export class BreedsListComponent {
  public breeds: any;
  public totalPages: number = 0;

  constructor(public getBreedService: GetBreedsService) {
    this.getBreedService
      .getBreeds("https://catfact.ninja/breeds")
      .subscribe((data) => {
        this.breeds = data;
        this.totalPages = Math.round(data.total / data.per_page);
      });
  }

  public getPrevious() {
    this.getBreedService
      .getBreeds(this.breeds.prev_page_url)
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
      .getBreeds(this.breeds.next_page_url)
      .subscribe((data) => {
        this.breeds = data;
      });
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}
