import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BarchartComponent } from "./charts/barchart/barchart.component";
import { DoughnutComponent } from "./charts/doughnut/doughnut.component";
import { LinechartComponent } from "./charts/linechart/linechart.component";
import { PiechartComponent } from "./charts/piechart/piechart.component";
import { PolarareaComponent } from "./charts/polararea/polararea.component";

const routes: Routes = [
  {
    path: "LineChart",
    component: LinechartComponent,
  },
  {
    path: "BarChart",
    component: BarchartComponent,
  },
  {
    path: "PieChart",
    component: PiechartComponent,
  },
  {
    path: "DoughnutChart",
    component: DoughnutComponent,
  },
  {
    path: "Polarchart",
    component: PolarareaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
