import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-polararea",
  templateUrl: "./polararea.component.html",
  styleUrls: ["./polararea.component.css"],
})
export class PolarareaComponent implements OnInit {
  // url = "http://localhost:58617/API/Charts/GetCharts";
  // // data: Data[];
  Player = [
    "Rohit",
    "Virat",
    "sachin",
    "Dhoni",
    "Dhavan",
    "Bumrah",
    "shami",
    "thomas",
  ];
  Runs = [100, 109, 100, 34, 34, 2, 4, 5];
  Polarchart = [];
  constructor() {}

  ngOnInit() {
    this.Polarchart = new Chart("canvas", {
      type: "polarArea",
      data: {
        labels: this.Player,

        datasets: [
          {
            data: this.Runs,
            borderColor: "#3cb371",
            backgroundColor: [
              "#3cb371",
              "#0000FF",
              "#9966FF",
              "#4C4CFF",
              "#00FFFF",
              "#f990a7",
              "#aad2ed",
              "#FF00FF",
            ],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: true,
            },
          ],
        },
      },
    });
  }
}
