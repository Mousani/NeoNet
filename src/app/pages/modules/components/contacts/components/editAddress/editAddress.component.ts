import { Component,Input,  OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-address',
  styleUrls: [('./editAddress.scss')],
  templateUrl: './editAddress.html'
})

export class EditAddress implements OnInit {

  @Input() addressEdit;

	ngOnChanges() {
		console.log("this.addressEdit ",this.addressEdit);
		this.address = this.addressEdit;
	}

  modalHeader: string;
  address = {
    "dbContactNumber": "",
		"dbAddress": "",
		"dbCity": "",
		"dbState": "",
		"dbZip": "",
		"dbCountry": "",
		"dbAddressType": "",
		"dbTitle": "",
		"dbFirstName": "",
		"dbLastName": "",
		"dbBusinessTitle": "",
		"dbCompany": "",
		"dbProvince": "",
		"dbAddressKey": "",
		"dbType": "",
		"dbAddressLabel": "",
		"dbNumberKeys": "",
    "dbEmail": "",
    "dbEmails": [],
    "dbPhoneNumbers": [],
  };
  
	
	addElement(array, key) {
		console.log(array[key])
		if(!array[key]) array[key] = [];
		array[key].push('');
	}
	deleteElement(array, key, index) {
		array[key].splice(index, 1);
	}


	trackByIndex(index: number, value: number) {
    return index;
	}
	
  labels =  {
		"dbContactNumber": "Contact Number",
		"dbAddress": "Address",
		"dbCity": "City",
		"dbState": "State",
		"dbZip": "ZIP",
		"dbCountry": "Country",
		"dbAddressType": "Address Type",
		"dbTitle": "Title",
		"dbFirstName": "First Name",
		"dbLastName": "Last Name",
		"dbBusinessTitle": "Business Title",
		"dbCompany": "Company",
		"dbProvince": "Province",
		"dbAddressKey": "Address Key",
		"dbType": "Type",
		"dbAddressLabel": "Address Label",
		"dbNumberKeys": "Number Keys",
		"dbEmail": "Email"
	};

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }
}
