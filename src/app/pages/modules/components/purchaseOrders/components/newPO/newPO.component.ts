import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

import {PurchaseOrdersService} from '../../purchaseOrders.service';


@Component({
	selector: 'new-po',
	styleUrls: ['./newPO.scss'],
	templateUrl: './newPO.html',
	providers : [PurchaseOrdersService]
})
export class NewPO {

	@Input() addNewPO;
	@Input() vendorList;
	@Output() addNewPOChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	
	newPO = {};
	shipingList =[];

	ngOnChanges() {
	}

	submitNewPO(){
	}
	addShipingData = {};
	shipMethodViewFun = function(){
		this.shipMethodView = !this.shipMethodView;
	}
	createToggle() {
		this.addNewPO = !this.addNewPO;
		this.addNewPOChange.emit(this.addNewPO);
	}
	addShipping = function(data){
		if(data.shippingOptData == undefined || data.shippingOptData ==  null || data.shippingOptData == ''){
			alert('Please Enter shipping Data');			
		}
		else{
			var newRow = {shippingOptData :'',removeFlag: false,webOption: false};
			newRow.shippingOptData = data.shippingOptData ? data.shippingOptData : '';
			newRow.removeFlag = data.removeFlag ? data.removeFlag : false;
			newRow.webOption = data.webOption ? data.webOption : false;
			this.shipingList.push( newRow);
			this.addShipingData = {};
		}
	}
	submitChanges = function(){
		this.delList =[];   //Delte ele Indexes  
		this.shipingList.forEach(
		  (ele,index) =>{
			if(ele.removeFlag){
			  this.delList.push(index);        
			}
		  }
		)	
		this.delList.forEach((element,index) => {
		  var i = element-index;  //geting index of delete element
		  this.shipingList.splice(i,1);  //Deleteting the element from List
		});
	}

	constructor(private _sanitizer: DomSanitizer,private POSer : PurchaseOrdersService) {

		this.POSer.getshippingOpt().subscribe((data) => {
			this.shipingList = data;
			});

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
