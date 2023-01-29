import { NgModule } from "@angular/core";
import { BreedComponent } from "./components/breed/breed.component";
import { MatCardModule } from "@angular/material/card";
import { GetBreedsService } from "./services/getBreeds.service";

@NgModule({
  declarations: [BreedComponent],
  imports: [MatCardModule],
  exports: [BreedComponent],
})
export class SharedModule {}
