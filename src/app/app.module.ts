import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { D3PackedBubbleChartService } from './d3-packed-bubble-chart.service';
import { D3TreemapService } from './d3-treemap.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [D3PackedBubbleChartService, D3TreemapService]
})
export class AppModule { }
