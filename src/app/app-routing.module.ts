
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BreedsDetailsComponent } from "./components/breeds-details/breeds-details.component";
import { BreedsListComponent } from "./components/breeds-list/breeds-list.component";

const routes: Routes = [
  { path: "breeds-list", component: BreedsListComponent },
  {path:"breeds-details", component: BreedsDetailsComponent},
  { path: "**", redirectTo: "breeds-list" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
