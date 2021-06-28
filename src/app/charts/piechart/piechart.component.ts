import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Chart } from "chart.js";
import { Data } from "../../../app/data";
@Component({
  selector: "app-piechart",
  templateUrl: "./piechart.component.html",
  styleUrls: ["./piechart.component.css"],
})
export class PiechartComponent implements OnInit {
  title = "app";
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
  chart = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.chart = new Chart("canvas", {
      type: "pie",
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
          display: true,
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
