import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  @Input()
  index: number;

  option: EChartOption;

  chartOptions: EChartOption[] = [
    {
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
    },
    {
      tooltip: {
        trigger: 'item',
        formatter: "{b} ({d}%)"
      },
      series: [
        {
          radius: ['50%', '70%'],
          type: 'pie',
          data: [
            { value: 11787, name: 'Dollar' },
            { value: 34928, name: 'Aktier' },
            { value: 69610, name: 'Räntor' },
            { value: 229924, name: 'Sparkonto' },
            { value: 250, name: 'Bitcoin'}
          ],
        }]
    }
  ];


  constructor() { }

  ngOnInit() {
    this.option = this.chartOptions[this.index];
  }


}
