import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnChanges {
  starRatio: number;
  @Input() rating: number;
  @Input() code: string;
  @Output() event = new EventEmitter<string>();

  ngOnChanges(): void {
    console.log('Called ngOnChanges');
    this.starRatio = 75 * this.rating / 5;
  }

  onClickRating() {
    this.event.emit(`Send value ${this.rating}`);
  }
}
