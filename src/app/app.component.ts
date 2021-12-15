import { Component } from '@angular/core';
import { D3PackedBubbleChartService } from './d3-packed-bubble-chart.service';
import { D3TreemapService } from './d3-treemap.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';

  constructor(
    private d3PackedBubbleChartService: D3PackedBubbleChartService,
    private d3TreemapService: D3TreemapService
  ) { }

  ngOnInit() {
    this.d3PackedBubbleChartService.renderChart();
    // this.d3TreemapService.renderChart();
  }
}
