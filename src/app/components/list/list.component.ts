import {Component, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import pqrs_data from '../../../assets/data/pqrs.json';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  faSearch = faSearch;
  userId: number | null;
  pqrs: any[] = [];
  filteredPqrs: any[] = [];

  constructor(private router: Router) {
    this.userId = parseInt(<string>sessionStorage.getItem('userId'));
  }

  ngOnInit(): void {
    this.pqrs = pqrs_data.filter((data: { userId: number | null; }) => data.userId == this.userId)[0].pqrs;
    this.filteredPqrs = this.pqrs;
  }

  pickOne(item: string) {
    this.router.navigate(['pages/pqrs-history', item]);
  }

  search(keyword: string) {
    keyword = keyword.toLowerCase();
    this.filteredPqrs = this.pqrs.filter(data => {
      return data.code.toLowerCase().indexOf((keyword)) > -1 || data.date.toLowerCase().indexOf((keyword)) > -1 || data.subject.toLowerCase().indexOf((keyword)) > -1
    });
  }

}
