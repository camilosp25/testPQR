import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// @ts-ignore
import pqrs_data from '../../../assets/data/pqrs.json';

@Component({
  selector: 'app-pqrs-history',
  templateUrl: './pqrs-history.component.html',
  styleUrls: ['./pqrs-history.component.scss']
})
export class PqrsHistoryComponent implements OnInit {

  code: string | null;
  userId: number | null;
  pqrs: any;
  history: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.userId = parseInt(<string>sessionStorage.getItem('userId'));
    this.code = this.route.snapshot.paramMap.get('code');
    route.params.subscribe(params => {
      this.code = params.code;
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.pqrs = pqrs_data.filter((data: { userId: number | null; }) => data.userId == this.userId)[0].pqrs
    this.history = this.pqrs.filter((data: { code: string | null; }) => data.code === this.code)[0].history;
  }

}
