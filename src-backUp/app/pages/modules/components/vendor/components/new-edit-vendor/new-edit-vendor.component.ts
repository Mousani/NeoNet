import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-edit-vendor',
  templateUrl: './new-edit-vendor.component.html',
  styleUrls: ['./new-edit-vendor.component.scss']
})
export class NewEditVendorComponent implements OnInit {

@Input() vendorDetails;

  constructor() { }

  ngOnInit() {
  }

}
