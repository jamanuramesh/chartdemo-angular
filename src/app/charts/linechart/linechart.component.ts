import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
// import { HttpClient } from "@angular/common/http";
import { Data } from "../../../app/Data";
@Component({
  selector: "app-linechart",
  templateUrl: "./linechart.component.html",
  styleUrls: ["./linechart.component.css"],
})
export class LinechartComponent implements OnInit {
  // @ViewChild("lineChart") private chartRef;
  chart: any;
  month = [];
  price = [];
  Linechart = [];
  constructor() {}

  ngOnInit() {
    this.month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];
    this.price = [10, 20, 30, 40, 50, 40, 10];
    this.Linechart = new Chart("canvas", {
      type: "line",
      data: {
        labels: this.month,
        datasets: [
          {
            data: this.price,
            borderColor: "#3cba9f",
            fill: false,
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
