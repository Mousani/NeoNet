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
	@Input() contactEdit;
	@Input() addressArray;
	@Output() addNewInvoiceChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	arrayOfStrings = [];
	createToggle() {
		this.addNewInvoice = !this.addNewInvoice;
		this.addNewInvoiceChange.emit(this.addNewInvoice);
	}

	constructor(private modalService: NgbModal,private service: InvoicesService) {
		this.service.getContactsList().subscribe((data) => {
			this.arrayOfStrings = data;
			console.log("data ", data)
		  });
		
	}

	isRemember: boolean = false;
	
}
