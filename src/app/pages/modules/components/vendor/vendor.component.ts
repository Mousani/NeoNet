import { Component, OnInit } from '@angular/core';

import {VendorService} from './vendor.service';
import {AppState} from './../../../../app.service';
import {BaMenuService} from './../../../../theme/services/baMenu'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
  providers : [VendorService,AppState]
})
export class VendorComponent implements OnInit {

  data = [];
  filterQuaryForVen = "";
  rowsOnPage = 10;
  sortBy = "dbVendorNumber";
  sortOrder = "asc";
  count = 1;
  newVendor = false;
  viewVendorStatus = false;
  editVendorStatus = false;  
  selectedVendor ={};
  menu = new BehaviorSubject<any[]>([]);
  
  constructor(private venSer :VendorService,private state :  AppState, private baMenuSer : BaMenuService ) { 
    // this.baMenuSer.menuItems.
    // var myBreadCrumb = document.querySelectorAll('#breadCrumbData')[0];
    // myBreadCrumb.textContent  = "Purchase Orders / Vendor"var myBreadCrumb = document.querySelectorAll('#breadCrumbData')[0];
    // myBreadCrumb.textContent  = "Purchase Orders / Vendor"
  }
  selVen : any; 
  ngOnInit( ) {
    this.venSer.getData()
    .subscribe(data =>this.data = data );

    // this.globalState.se
  }

  newVendorFun = function(){
    this.newVendor = true;
  }

  setVendor = function(selVen){
    this.viewVendorStatus = true;
    this.selectedVendor = selVen;
    this.selVen = this.selectedVendor;
  }

  newVendorForAdd = function(){
    this.viewVendorStatus = false;
    this.editVendorStatus = true;
    this.selVen = {}; 
    this.selVen.dbDateAdded = '';   
  }

}
