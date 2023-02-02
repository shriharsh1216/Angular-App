import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {
  SingleDataSet,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';

@Component({ 
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'], 
})
export class BusinessComponent implements OnInit {
  //for pie chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Desktop'], ['Mobile View']];
  public pieChartData: SingleDataSet = [86, 14];
  pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  //for progress bar
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  colorAttendence = 'Primary';
  modeAttendence: ProgressBarMode = 'determinate';
  valueAttendence = 50;
  bufferValueAttendence = 75;
  colorAssignments = 'Yellow';
  modeAssignments: ProgressBarMode = 'determinate';
  valueAssignments = 50;
  bufferValueAssignments = 80;
  colorExams = 'Primary';
  modeExams: ProgressBarMode = 'determinate';
  valueExams = 50;
  bufferValueExams = 60;

  //for the line charts
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

  constructor() {}

  ngOnInit(): void {}
}
