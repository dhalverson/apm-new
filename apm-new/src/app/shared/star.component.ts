import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;

  ngOnChanges() {
    this.cropWidth = this.rating * (this.cropWidth/5);
  }
} 