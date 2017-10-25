import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modals } from '../../../../theme/components/modals/modals.component';
import { EditAddress } from './components/editAddress/editAddress.component';
import { DefaultModal } from '../../../../theme/components/modals/default-modal/default-modal.component';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.scss']
})
export class Contacts {

    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "dbContactNumber";
    sortOrder = "asc";
    count = 1;
    addNew = false;
    viewContactStatus = false;
    addressOfContact = [];
    address = {};

    editContact(contact) {
      this.addNew = !this.addNew;
      this.viewContactStatus = !this.viewContactStatus;
    }



    lgModalShow(address) {
      const activeModal = this.modalService.open(EditAddress, {size: 'sm'});
      activeModal.componentInstance.modalHeader = 'Edit Address';
      console.log("this.address ", address);
      activeModal.componentInstance.address = address;
    } 

    public setContact = (contact) => {  
      this.viewContactStatus = true;
      this.contact = contact;
      this.service.getAddress(contact.dbContactNumber).subscribe((address) => {
        this.addressOfContact = address;
      });
    }

    backToList() {
      this.addressOfContact = [];
    }

    contact = {};
    

    constructor(private service: ContactsService,
                private modalService: NgbModal) {
      this.service.getData().subscribe((data) => {
        this.data = data;
      });
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}
