import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Chart } from "chart.js";
import { Data } from "../../../app/data";
@Component({
  selector: "app-barchart",
  templateUrl: "./barchart.component.html",
  styleUrls: ["./barchart.component.css"],
})
export class BarchartComponent implements OnInit {
  data: Data[];
  url = "http://localhost:58617/API/Charts/GetCharts";
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
  barchart = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.barchart = new Chart("canvas", {
      type: "bar",
      data: {
        labels: this.Player,
        datasets: [
          {
            data: this.Runs,
            borderColor: "#3cba9f",
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
            fill: true,
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
              display: true,
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
