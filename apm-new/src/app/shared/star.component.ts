import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() name: string = '';
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = 
    new EventEmitter<string>();

  ngOnChanges() {
    this.cropWidth = this.rating * (this.cropWidth/5);
  }

  onClick() {
    this.ratingClicked.emit(`${this.name} has a rating of ${this.rating} stars!`)
  }

} 