import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3TreemapService {

  constructor() { }


  renderChart() {

    let color = d3.scaleOrdinal(d3.schemeCategory10);
    var svg = d3.select('body')
      .append('svg')
      .attr('width', 600)
      .attr('height', 600);

    var data = [{
          x: Math.random() * 500,
          y: Math.random() * 500,
          r: Math.random() * 50
        },{
          x: Math.random() * 500,
          y: Math.random() * 500,
          r: Math.random() * 50
        },{
          x: Math.random() * 500,
          y: Math.random() * 500,
          r: Math.random() * 50
        },{
          x: Math.random() * 500,
          y: Math.random() * 500,
          r: Math.random() * 50
        },{
          x: Math.random() * 500,
          y: Math.random() * 500,
          r: Math.random() * 50
        },{
          x: Math.random() * 500,
          y: Math.random() * 500,
          r: Math.random() * 50
        },{
          x: Math.random() * 500,
          y: Math.random() * 500,
          r: Math.random() * 50
        }];
        
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', function(d){
        return d.r;
      })
      .attr('cx', function(d){
        return d.x;
      })
      .attr('cy', function(d){
        return d.y;
      }).style("fill", function (d, i: any) {
        return color(i);
      });;
        
    
      //   d3.select(self.frameElement)
      // .style("height", 600 + "px")
      // .style("width", 600 + "px");;


  }

}