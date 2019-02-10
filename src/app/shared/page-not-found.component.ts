import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnChanges {
  @Input() colSpan: 5;

  constructor() { }

  ngOnChanges(): void {
    console.log('Change : ' + this.colSpan);
  }

}
