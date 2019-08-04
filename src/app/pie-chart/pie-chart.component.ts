import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chartOption: EChartOption = {
    title: {
      text: 'Utgifter (kr)',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },
    series: [
      {
        radius: ['50%', '70%'],
        type: 'pie',
        data: [
          { value: 9900, name: 'Hushåll' },
          { value: 9000, name: 'Sparande' },
          { value: 4200, name: 'Mat' },
          { value: 4000, name: 'Shopping' },
          { value: 850, name: 'Transport' },
          { value: 600, name: 'CSN' }
        ],

      }]
  }

  constructor() { }

  ngOnInit() {
  }

}
