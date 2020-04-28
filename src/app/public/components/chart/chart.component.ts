import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import Chart from "chart.js";

const AMERICAN_COLORS = {
  "gree-200": "#81ecec",
  "blue-200": "#74b9ff",
  "purple-200": "#a29bfe",
};

@Component({
  selector: "app-chart",
  template: `<canvas #chartRef style="width: 100%;"></canvas>`,
  //styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  /* Referencia al chart en HTML */
  @ViewChild("chartRef", { static: true }) chartRef: ElementRef;

  /* Atributos del gráfico */
  private chart: any;
  private data: {};
  private options: any;

  constructor() {}

  ngOnInit(): void {
    this.generateData();
    this.generateChart();
  }

  /**
   * Construye el grafico a partir de un camvas que se establece en el HTML
   * @return void
   */
  private generateChart(): void {
    const graph = this.chartRef.nativeElement.getContext("2d");
    this.chart = new Chart(graph, {
      type: "line",
      data: this.data,
      options: this.chartOptions(),
    });
  }

  /**
   * Actualiza la informacion de la chart
   * Se le asignan nuevos labels
   * globalmente se mantienen los datsets que se mostraran
   */
  private updateChartData(): void {
    // asignacion de nuevos valores - falta

    this.chart.update();
  }

  /**
   * Configuracion del chart
   * @return void
   */
  private chartOptions(): {} {
    return {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        labels: {
          fontColor: "#2d3436",
        },
      },
      hover: {
        mode: "index",
      },

      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Fecha (Mes/Día/Año)",
            },
            gridLines: {
              display: true,
              color: "#dfe6e9",
            },
            ticks: {
              fontColor: "#2d3436",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: `Inventario`,
            },
            gridLines: {
              display: true,
              color: "#dfe6e9",
            },
            ticks: {
              fontColor: "#2d3436",
            },
          },
        ],
      },
    };
  }

  private generateData(): void {
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Arroz",
          data: [
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
          ],
          borderColor: AMERICAN_COLORS["blue-200"],
          backgroundColor: AMERICAN_COLORS["blue-200"],
          fill: false,
          borderDash: [5, 5],
          pointRadius: 8,
          pointHoverRadius: 10,
        },
        {
          label: "Leche",
          data: [
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
          ],
          borderColor: AMERICAN_COLORS["gree-200"],
          backgroundColor: AMERICAN_COLORS["gree-200"],
          fill: false,
          borderDash: [5, 5],
          pointRadius: 8,
          pointHoverRadius: 10,
        },
        {
          label: "Azucar",
          data: [
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
          ],
          borderColor: AMERICAN_COLORS["purple-200"],
          backgroundColor: AMERICAN_COLORS["purple-200"],
          fill: false,
          pointRadius: 8,
          pointHoverRadius: 10,
        },
      ],
    };
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
