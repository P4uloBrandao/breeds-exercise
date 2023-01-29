import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BreedsListComponent } from "./components/breeds-list/breeds-list.component";

const routes: Routes = [
  { path: "breeds-list", component: BreedsListComponent },
  { path: "**", redirectTo: "breeds-list" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
