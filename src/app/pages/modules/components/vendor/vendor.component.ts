import { Component, OnInit } from '@angular/core';

import {VendorService} from './vendor.service'

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
  providers : [VendorService]
})
export class VendorComponent implements OnInit {

  vendorData : any;
  constructor(private venSer :VendorService ) { }

  ngOnInit() {
    this.venSer.getData()
    .subscribe(data =>this.vendorData = data )
  }

}
