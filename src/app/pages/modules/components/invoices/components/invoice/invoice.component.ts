import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modals } from '../../../../../../theme/components/modals/modals.component';
import { InvoicesService } from '../../invoices.service';



@Component({
	selector: 'invoice',
	styleUrls: ['./invoice.scss'],
	templateUrl: './invoice.html',
})
export class Invoice {

	@Input() addNewInvoice;
	@Input() invoiceEdit;
	@Input() arrayOfStrings;
	@Input() addressArray;
	@Output() addNewInvoiceChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	ngOnChanges() {
		// console.log("this.invoiceEdit ",this.invoiceEdit);
		this.invoice = Object.assign({}, this.invoiceEdit);;
	}

	submitInvoice(){
		this.invoiceEdit = this.invoice;
		this.addNewInvoice = !this.addNewInvoice;
		this.addNewInvoiceChange.emit(this.addNewInvoice);
	}

	createToggle() {
		this.addNewInvoice = !this.addNewInvoice;
		this.addNewInvoiceChange.emit(this.addNewInvoice);
	}

	constructor(private modalService: NgbModal,private service: InvoicesService) {
		
		
	}

	

	isRemember: boolean = false;

	invoice = {
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
