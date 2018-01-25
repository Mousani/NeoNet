import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";




@Component({
	selector: 'new-po',
	styleUrls: ['./newPO.scss'],
	templateUrl: './newPO.html',
})
export class NewPO {

	@Input() addNewPO;
	@Input() vendorList;
	@Output() addNewPOChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	
	newPO = {};

	ngOnChanges() {
	}

	submitNewPO(){
	}

	createToggle() {
		this.addNewPO = !this.addNewPO;
		this.addNewPOChange.emit(this.addNewPO);
	}

	constructor(private _sanitizer: DomSanitizer) {
	}

	autocompleListFormatter = (data: any) : SafeHtml => {
		let html = `<span class="colBlack" style="color : black">${data.dbCompany} </span>`;
		return this._sanitizer.bypassSecurityTrustHtml(html);
	  }

	clear() {
		this.newPO = Object.assign({}, this.newPOEmpty);
		
	}
	

	isRemember: boolean = false;

	newPOEmpty = {
		"dbInvoiceNumber": "",
		"dbDateOrderReceived": {
			"year": "",
			"month": "",
			"day": "",
			"hour": "",
			"minute": "",
			"second": ""
		},
		"dbContactNumber": "",
		"dbShipToContact": "",
		"dbBillToContact": "",
		"dbDeliveryDate": "",
		"dbDiscountPercentage": "",
		"dbDiscountAmount": "",
		"dbDepositReceived": "",
		"dbComments": "",
		"dbShippingCost": "",
		"dbCustomerPONumber": "",
		"dbTerms": "",
		"dbShippingMethod": "",
		"dbDateOrderShipped": {
			"year": "",
			"month": "",
			"day": "",
			"hour": "",
			"minute": "",
			"second": ""
		},
		"dbPublicNotes": "",
		"dbPrivateNotes": "",
		"dbSalesTax": "",
		"dbShippingInfo": "",
		"dbLastName": "",
		"dbFirstName": "",
		"dbCompanyName": "",
		"dbAddressLine1": "",
		"dbAddressLine2": "",
		"dbCity": "",
		"dbState": "",
		"dbZipcode": "",
		"dbCountry": "",
		"dbPhone1": "",
		"dbPhone2": "",
		"dbFax1": "",
		"dbFax2": "",
		"dbLabel": "",
		"dbShippingUseless": "",
		"dbHistoricalInvoiceNumber": "",
		"dbEmailAddress": "",
		"dbWebsite": "",
		"dbSubtotal": "",
		"dbNotDiscountedTotal": "",
		"dbTotal": "",
		"dbBalance": "",
		"dbQuote": "",
		"dbProjectNumber": "",
		"dbItemList": "",
		"dbPaid": "",
		"dbInvoiceCompany": ""
	};
 	
}
