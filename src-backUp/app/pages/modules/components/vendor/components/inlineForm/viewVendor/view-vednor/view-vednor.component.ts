import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-view-vednor',
  templateUrl: './view-vednor.component.html',
  styleUrls: ['./view-vednor.component.scss']
})
export class ViewVednorComponent implements OnInit {

@Input() vendor ;
  constructor() { }

  ngOnInit() {
  }

  

  labels =  {
		"dbVendorNumber": 'Vendor',
    "dbDateAdded": 'Date Added',
    "dbCompany": "Company",
    "dbContactName": "Contact Name",
    "dbBusinessTitle": "Business Title",
    "dbAddress": "Address",
    "dbCity": "City",
    "dbState": "State",
    "dbCountry": "Country",
    "dbZip": "Zip",
    "dbProvince": 'Province',
    "dbAccount": "Account",
    "dbTerms": "Terms",
    "dbSupplies": "Supplies",
    "dbPhone": "Phone",
    "dbSecondPhone": 'Cell/ Mobile',
    "dbFax": "Fax",
    "dbSecondFax": 'Second Fax',
    "dbEmail": "Email",
    "dbWebsite": "Website",
    "dbNotes": "Notes",
    "dbVendorCompany": "Vendor for Company"
	};

}
