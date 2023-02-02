import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //for pie chart
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  //for line charts
  lineChartData: ChartDataSets[] = [
    { data: [0, 1.5, 2.5, 1, 4, 3, 2], label: '' },
  ];

  lineChartLabels: Label[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  lineChartOptions = {
    responsive: true,
    tooltips: {
      backgroundColor: 'rgba(255,255,255,0.9)',
      bodyFontColor: '#999',
      borderColor: '#999',
      borderWidth: 1,
      caretPadding: 15,
      colorBody: '#666',
      displayColors: false,
      enabled: true,
      intersect: false,
      //  mode: 'index',
      titleFontColor: '#999',
      titleMarginBottom: 10,
      xPadding: 10,
      yPadding: 10,
    },
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      // backgroundColor: 'white',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  //for the spinner
  color = 'primary';
  mode = 'determinate';
  value = 95;
  showText = 'Rating';

  constructor() {}

  ngOnInit(): void {}
}
