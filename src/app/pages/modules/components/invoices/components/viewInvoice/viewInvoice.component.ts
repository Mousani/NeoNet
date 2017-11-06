import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'view-invoice',
	styleUrls: ['./viewInvoice.scss'],
	templateUrl: './viewInvoice.html',
})
export class ViewInvoice {
	viewContact = {};

	@Input() invoice;
	@Input() viewInvoiceStatus;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	ngOnInit() {
		console.log(this.invoice)
		this.viewContact = this.invoice;
	}
	backToContacts() {
		this.viewInvoiceStatus = !this.viewInvoiceStatus;
	}

	submitContact() {
		console.log(this.invoice);
	}

	parseValue(key, obj) {
		if(key.indexOf('Date') > -1) {
			return this.toDate(obj);
		}else {
			return obj;
		}
 	}

	labels =  {
		"dbContactNumber": "Contact#",
		"dbDate": "Date",
		"dbLastName": "Last Name",
		"dbFirstName": "First Name",
		"dbCompany": "Company",
		"dbTitle": "Title",
		"dbBusinessTitle": "Business Title",
		"dbPrimaryEmail": "Primary Email",
		"dbSecondaryEmail": "Secondary Email",
		"dbWebAddress": "Web Address",
		"dbAddNotes": "Add Notes",
		"dbSource": "Source",
		"dbCheck": "Check",
		"dbMailingLabel": "Mailing Label",
		"dbPassword": "Password",
		"dbSecurityQuestion": "Security Question",
		"dbSecurityAnswer": "Security Answer",
		"dbRegistrationComplete": "Registration Complete",
		"dbHowFind": "How Find",
		"dbWebLook": "Web Look",
		"dbWantRec": "Want Rec",
		"dbWantCom": "Want Com",
		"dbWantRes": "Want Res",
		"dbWhereUse": "Where Use",
		"dbVehicles": "Vehicles",
		"dbHowMuch": "How Much",
		"dbSelfAssembly": "Self Assembly",
		"dbNeoAssembly": "Neo Assembly",
		"dbOtherComments": "Other Comments",
		"dbHowInterest": "How Interest",
		"dbUsr": "Usr",
		"dbIP": "Ip",
		"dbPhone": "Phone",
		"dbAddress": "Address",
		"dbCity": "City",
		"dbState": "State",
		"dbCountry": "Country",
		"dbZip": "Zip",
		"dbType": "Type",
		"dbContactsCompany": "Contacts Company"
	};

	month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	  public toDate(dateObj) {
		if(dateObj) 
		  return (dateObj.day+1)+"-"+this.month[dateObj.month+1]+"-"+(dateObj.year);
		else 
		  return "";
	  }
	

	constructor() {
	}
}
