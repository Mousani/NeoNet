import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-edit-vendor',
  templateUrl: './new-edit-vendor.component.html',
  styleUrls: ['./new-edit-vendor.component.scss']
})
export class NewEditVendorComponent implements OnInit {

@Input() vendorDetails;

  constructor() {
    // if(this.vendorDetails == undefined || this.vendorDetails == null){
    //     this.vendorDetails = {};
    // }
   }

  ngOnInit() {
  }

}
