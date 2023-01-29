import { NgModule } from "@angular/core";
import { BreedComponent } from "./components/breed/breed.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [BreedComponent],
  imports: [MatCardModule],
  exports: [BreedComponent],
})
export class SharedModule {}
