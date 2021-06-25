import {Component, Input, OnInit} from '@angular/core';
import {faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  faClock = faClock;
  @Input() item: any;
  @Input() index: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  itemClass(index: any) {
    return (index % 2 !== 0) ? 'timeline-inverted' : '';
  }
}
