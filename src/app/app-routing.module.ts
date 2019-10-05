import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UniverseComponent } from './components/universe/universe.component';

const routes: Routes = [
  { path: "universe", component: UniverseComponent },
  { path: "**", redirectTo: "universe" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
