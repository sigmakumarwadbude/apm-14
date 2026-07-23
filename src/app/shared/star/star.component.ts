import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'sw-star',
  template: `<div
    class="crop"
    [style.width.px]="cropWidth"
    [title]="rating"
    (click)="onClick()"
  >
    <div style="width: 75px">
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
  </div>`,
  styles: [
    `
      .crop {
        overflow: hidden;
      }
      div {
        cursor: pointer;
      }
    `,
  ],
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  cropWidth = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.rating = (this.cropWidth * 75) / 5;
  }

  onClick() {
    this.ratingClicked.emit(`${this.rating} clicked`);
  }
}
