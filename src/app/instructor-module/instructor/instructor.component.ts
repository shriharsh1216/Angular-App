import { Component, OnInit } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss'],
})
export class InstructorComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Applied' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Left' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
