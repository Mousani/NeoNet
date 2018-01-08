import { Component, OnInit } from '@angular/core';

import {VendorService} from './vendor.service'

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
  providers : [VendorService]
})
export class VendorComponent implements OnInit {

  data = [];
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "venID";
  sortOrder = "asc";
  count = 1;
  addNew = false;
  viewContactStatus = false;
  constructor(private venSer :VendorService ) { }

  ngOnInit() {
    this.venSer.getData()
    .subscribe(data =>this.data = data )
  }

}
